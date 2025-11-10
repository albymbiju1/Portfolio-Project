// Test script to debug email configuration
const nodemailer = require('nodemailer');

// Test with your actual credentials (replace with your actual values)
const EMAIL_USER = 'your-email@gmail.com'; // Replace with your actual EMAIL_USER
const EMAIL_PASS = 'your-app-password'; // Replace with your actual EMAIL_PASS

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('EMAIL_USER:', EMAIL_USER);
  console.log('EMAIL_PASS set:', !!EMAIL_PASS);

  try {
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    console.log('Transporter created successfully');

    // Test connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!');

    // Test sending email
    const mailOptions = {
      from: EMAIL_USER,
      to: 'albymbiju7@gmail.com',
      subject: 'Test Email from Portfolio Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7928ca;">Test Email</h2>
          <p>This is a test email to verify the contact form is working.</p>
          <p style="color: #666; font-size: 14px;">Sent on: ${new Date().toLocaleString()}</p>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', result.messageId);
    console.log('Response:', result.response);

  } catch (error) {
    console.error('❌ Email test failed:');
    console.error('Error:', error.message);

    if (error.code === 'EAUTH') {
      console.log('\n🔧 Authentication Error - Check:');
      console.log('1. 2-Factor Authentication is enabled on Gmail');
      console.log('2. You are using an App Password (not your regular password)');
      console.log('3. EMAIL_USER and EMAIL_PASS are correct');
    } else if (error.code === 'ECONNECTION') {
      console.log('\n🔧 Connection Error - Check:');
      console.log('1. Internet connection');
      console.log('2. Gmail service is accessible');
    }
  }
}

// Run the test
testEmail();