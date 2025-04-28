import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Use nodejs runtime without forcing dynamic
export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to handle CORS
function corsResponse(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

// For local testing without Resend
const ADMIN_EMAIL = 'mickovicbalsa.work@gmail.com';

export async function OPTIONS() {
  return corsResponse(new NextResponse(null, { status: 204 }));
}

export async function POST(req: Request) {
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return corsResponse(new NextResponse(null, { status: 204 }));
  }

  if (!process.env.RESEND_API_KEY) {
    return corsResponse(
      NextResponse.json(
        { error: 'Resend API key not configured' },
        { status: 500 }
      )
    );
  }

  try {
    const data = await req.json();
    
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return corsResponse(
        NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        )
      );
    }

    const { data: emailResponse, error } = await resend.emails.send({
      from: 'Flowgent <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'mickovicbalsa.work@gmail.com'],
      subject: 'New Inquiry from Flowgent Website',
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>From:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Company Size:</strong> ${data.companySize || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `
    });

    if (error) {
      return corsResponse(
        NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        )
      );
    }

    return corsResponse(
      NextResponse.json({ 
        success: true,
        message: 'Email sent successfully'
      })
    );

  } catch (error) {
    console.error('API Error:', error);
    return corsResponse(
      NextResponse.json(
        { error: 'Server error' },
        { status: 500 }
      )
    );
  }
} 