import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// For local testing without Resend
const ADMIN_EMAIL = 'mickovicbalsa.work@gmail.com';

export async function POST(req: Request) {
  console.log('Received contact form submission');
  
  try {
    const data = await req.json();
    console.log('Form data received:', data);
    
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      console.log('Missing required fields');
      return new NextResponse(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Format the inquiry details
    const inquiryDetails = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone || 'Not provided',
      company: data.company || 'Not provided',
      companySize: data.companySize || 'Not provided',
      message: data.message,
      timestamp: new Date().toISOString()
    };
    console.log('Formatted inquiry details:', inquiryDetails);

    // Check if we have the Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('Resend API key is not configured');
      return new NextResponse(
        JSON.stringify({ error: 'Email service not configured (missing API key)' }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Check if we have the admin email
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      console.error('Admin email is not configured');
      return new NextResponse(
        JSON.stringify({ error: 'Email service not configured (missing admin email)' }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Initializing Resend with API key');
    // Initialize Resend with the API key
    const resend = new Resend(resendApiKey);

    console.log('Attempting to send email to:', adminEmail);
    // Send email to admin
    const { data: emailResponse, error } = await resend.emails.send({
      from: 'Flowgent <no-reply@flowgent.com>',
      to: adminEmail,
      subject: 'New Inquiry from Flowgent Website',
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>From:</strong> ${inquiryDetails.name}</p>
        <p><strong>Email:</strong> ${inquiryDetails.email}</p>
        <p><strong>Phone:</strong> ${inquiryDetails.phone}</p>
        <p><strong>Company:</strong> ${inquiryDetails.company}</p>
        <p><strong>Company Size:</strong> ${inquiryDetails.companySize}</p>
        <p><strong>Message:</strong></p>
        <p>${inquiryDetails.message}</p>
        <p><em>Sent at: ${inquiryDetails.timestamp}</em></p>
      `
    });

    if (error) {
      console.error('Failed to send email:', error);
      return new NextResponse(
        JSON.stringify({ error: `Failed to send inquiry email: ${error.message}` }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Email sent successfully');
    return new NextResponse(
      JSON.stringify({ 
        success: true,
        message: 'Inquiry received successfully'
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Failed to process inquiry'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 