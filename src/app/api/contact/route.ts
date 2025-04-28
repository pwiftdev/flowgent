import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Define allowed methods
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

// Add OPTIONS method for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// For local testing without Resend
const ADMIN_EMAIL = 'mickovicbalsa.work@gmail.com';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await req.json();
    
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    try {
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
        console.error('Failed to send email:', error);
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        );
      }

      return NextResponse.json({ 
        success: true,
        message: 'Email sent successfully'
      });

    } catch (emailError) {
      console.error('Email error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
} 