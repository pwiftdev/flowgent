import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// For local testing without Resend
const ADMIN_EMAIL = 'mickovicbalsa.work@gmail.com';

export async function POST(req: Request) {
  try {
    // Log the raw request
    const rawBody = await req.text();
    console.log('Raw request body:', rawBody);

    // Parse the JSON manually
    let data;
    try {
      data = JSON.parse(rawBody);
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return new NextResponse(
        JSON.stringify({ error: 'Invalid request format' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Log the parsed data
    console.log('Parsed form data:', data);
    
    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      const missingFields = [];
      if (!data.firstName) missingFields.push('firstName');
      if (!data.lastName) missingFields.push('lastName');
      if (!data.email) missingFields.push('email');
      if (!data.message) missingFields.push('message');
      
      console.log('Missing required fields:', missingFields);
      return new NextResponse(
        JSON.stringify({ 
          error: 'Missing required fields', 
          missingFields 
        }),
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

    // Check environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;

    console.log('Environment check:', {
      hasResendKey: !!resendApiKey,
      hasAdminEmail: !!adminEmail,
      adminEmail: adminEmail // Log the actual email for verification
    });

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

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    try {
      console.log('Attempting to send email with Resend...');
      
      // Send email
      const { data: emailResponse, error } = await resend.emails.send({
        from: 'Flowgent <onboarding@resend.dev>',
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

      console.log('Resend response:', { emailResponse, error });

      if (error) {
        console.error('Resend error:', error);
        return new NextResponse(
          JSON.stringify({ 
            error: `Failed to send inquiry email: ${error.message}`,
            details: error
          }),
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
          message: 'Inquiry received successfully',
          emailId: emailResponse?.id
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    } catch (emailError) {
      console.error('Error in Resend operation:', emailError);
      return new NextResponse(
        JSON.stringify({ 
          error: 'Failed to send email',
          details: emailError instanceof Error ? emailError.message : String(emailError)
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  } catch (error) {
    console.error('Unhandled error in contact form API:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : String(error)
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 