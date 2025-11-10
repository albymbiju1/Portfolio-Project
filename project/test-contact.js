// Simple test script for the contact function
// Run this with: node test-contact.js

const testContactForm = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from the contact form.'
  };

  try {
    // This would work when deployed to Netlify
    // For local testing, you'd need netlify-cli
    console.log('Test data:', testData);
    console.log('To test the contact function:');
    console.log('1. Deploy to Netlify');
    console.log('2. Set EMAIL_USER and EMAIL_PASS environment variables');
    console.log('3. Test the form on your live site');
    console.log('4. Check your email for the notification');

    // For local testing with netlify-cli:
    // npm install -g netlify-cli
    // netlify dev
    // Then test: curl -X POST http://localhost:8888/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Test message"}'

  } catch (error) {
    console.error('Test error:', error);
  }
};

testContactForm();