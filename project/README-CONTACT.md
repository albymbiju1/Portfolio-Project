# Contact Form Setup Guide

Your portfolio now has a fully functional contact form with backend processing! Here's how to set it up:

## 📧 Email Configuration

### Option 1: Gmail (Recommended)
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable 2-factor authentication if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Create a new app password:
   - Select "Mail" for the app
   - Select "Other (Custom name)" for the device
   - Name it "Portfolio Contact Form"
   - Copy the 16-character password

### Option 2: Other Email Services
You can also use Outlook, Yahoo, or other email services by updating the `netlify/functions/contact.js` file.

## 🚀 Deployment

### Step 1: Deploy to Netlify
1. Push your code to GitHub
2. Create a Netlify account at [netlify.com](https://netlify.com)
3. Click "New site from Git" and connect your GitHub repository
4. Netlify will automatically detect your framework (Vite)

### Step 2: Set Environment Variables
In your Netlify dashboard:
1. Go to Site Settings > Environment Variables
2. Add these variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Step 3: Deploy
Netlify will automatically build and deploy your site with the backend functions!

## 🛠️ How It Works

### Backend Features:
- **Serverless Functions**: Runs on Netlify's infrastructure (free!)
- **Email Notifications**: You'll receive emails when someone contacts you
- **Input Validation**: Checks for required fields and valid email format
- **Error Handling**: Graceful error messages for users
- **CORS Support**: Properly configured for cross-origin requests

### Frontend Features:
- **Loading States**: Shows spinner while submitting
- **Success/Error Messages**: User-friendly feedback
- **Form Reset**: Clears form after successful submission
- **Accessibility**: Proper labels and semantic HTML

## 📊 Storage

Currently uses in-memory storage for submissions. For production, you can upgrade to:
- MongoDB Atlas (free tier available)
- Supabase
- PlanetScale
- Or any other database service

## 🧪 Testing

### Local Testing:
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. The contact form will work locally (email sending requires environment variables)

### After Deployment:
Test your live contact form by:
1. Sending a test message
2. Checking if you receive the email notification
3. Verifying the success message appears

## 🔧 Customization

### Change Email Recipient:
Edit `netlify/functions/contact.js` line 32:
```javascript
to: 'your-email@example.com', // Change this to your receiving email
```

### Customize Email Template:
Edit the HTML template in the `mailOptions` object in `contact.js`

### Add More Fields:
1. Add new fields to the form in `App.tsx`
2. Update the validation and processing in `contact.js`

## 📈 Monitoring

Netlify provides:
- Function logs in your dashboard
- Usage analytics
- Error tracking
- Performance metrics

## 🆘 Troubleshooting

### Email Not Sending:
- Verify EMAIL_USER and EMAIL_PASS are correct
- Check if Gmail App Password is properly generated
- Look at Netlify function logs for errors

### Form Not Working:
- Check browser console for JavaScript errors
- Verify the API endpoint is correct
- Ensure CORS headers are properly set

### Need Help?
- Check Netlify's [Functions documentation](https://docs.netlify.com/edge-functions/overview/)
- Review the function logs in your Netlify dashboard
- Test the API endpoint directly using curl or Postman