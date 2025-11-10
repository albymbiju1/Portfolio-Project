const nodemailer = require('nodemailer');

// Simple in-memory storage for submissions (in production, use a real database)
let submissions = [];

// Email transporter configuration
const createTransporter = () => {
  console.log('Creating email transporter with:', {
    service: 'gmail',
    hasUser: !!process.env.EMAIL_USER,
    hasPass: !!process.env.EMAIL_PASS,
    user: process.env.EMAIL_USER ? process.env.EMAIL_USER.substring(0, 3) + '***' : 'not set'
  });

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials not configured');
  }

  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    debug: true, // Enable debug logging
    logger: true  // Enable logger
  });
};

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Validate input
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'All fields are required' })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Invalid email format' })
      };
    }

    // Store submission
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    submissions.push(submission);

    // Send email notification
    let emailSent = false;
    let emailError = null;

    try {
      console.log('Creating transporter...');
      const transporter = createTransporter();

      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('✅ SMTP connection verified');

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'albymbiju7@gmail.com', // Your email to receive notifications
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7928ca;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${message}</p>
            </div>
            <p style="color: #666; font-size: 14px;">Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        `
      };

      console.log('Sending email to:', mailOptions.to);
      const result = await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully:', result);
      emailSent = true;
    } catch (error) {
      emailError = error;
      console.error('❌ Email sending failed:', {
        message: error.message,
        code: error.code,
        command: error.command
      });
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully!',
        emailSent,
        emailError: emailError ? emailError.message : null,
        submissionId: submission.id
      })
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: 'Internal server error',
        message: 'Failed to process your submission. Please try again.'
      })
    };
  }
};