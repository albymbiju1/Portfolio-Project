# Portfolio Project

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, interactive components, and a functional contact form with email notifications.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**:
  - Animated text effects
  - Interactive timeline
  - Skill charts
  - Project showcases
  - Terminal-style displays
- **Contact Form**: Functional contact form with email notifications via Netlify Functions
- **Code Syntax Highlighting**: React Syntax Highlighter for code displays
- **Professional UI**: Clean, modern design with attention to detail

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Syntax Highlighter** - Code syntax highlighting
- **@fontsource/jetbrains-mono** - Custom font for code displays

### Backend/Deployment
- **Netlify** - Hosting and serverless functions
- **Netlify Functions** - Contact form processing
- **Nodemailer** - Email sending
- **Gmail SMTP** - Email service

## 📁 Project Structure

```
project/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── AnimatedText.tsx
│   │   ├── AnimatedTimeline.tsx
│   │   ├── CaseStudy.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SkillCard.tsx
│   │   ├── SkillChart.tsx
│   │   └── TerminalText.tsx
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles
│   └── vite-env.d.ts        # Vite type definitions
├── netlify/
│   └── functions/
│       ├── contact.js       # Contact form serverless function
│       └── submissions.js   # Form submission handling
├── public/                  # Static assets
├── .env.example            # Environment variables template
├── netlify.toml            # Netlify configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📧 Contact Form Setup

The contact form uses Netlify Functions and Gmail SMTP to send emails. To set it up:

### 1. Environment Variables

Create environment variables in your Netlify dashboard (`Site Settings > Environment Variables`):

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 2. Gmail App Password

1. Enable 2-factor authentication on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for this project
4. Use the app password as `EMAIL_PASS`

### 3. Netlify Configuration

The `netlify.toml` file is already configured to:
- Redirect `/api/*` requests to Netlify Functions
- Handle build settings and deployment

## 🎨 Customization

### Colors and Theme

The design uses a purple and gray color scheme. Modify the colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#7928ca', // Main purple color
      // Add your custom colors here
    }
  }
}
```

### Personal Information

Update your personal details in `src/App.tsx`:
- Name and title
- Social media links
- Contact information
- Project descriptions
- Skills and experience

### Projects

Add or modify projects in the `projects` array in `src/App.tsx`:

```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/yourusername/project",
    live: "https://project-url.com"
  }
  // Add more projects...
];
```

## 🚀 Deployment

### Netlify Deployment

1. **Connect your repository** to Netlify
2. **Set environment variables** (see Contact Form Setup)
3. **Deploy** - Netlify will automatically build and deploy your site

### Build Configuration

The `netlify.toml` file handles:
- Build command: `npm run build`
- Publish directory: `dist`
- Function directory: `netlify/functions`
- Redirects for API routes

## 🧪 Testing

### Testing the Contact Form

1. Deploy your site to Netlify
2. Set up environment variables
3. Test the contact form on your live site
4. Check your email for notifications

For local testing with the Netlify CLI:
```bash
npm install -g netlify-cli
netlify dev
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- GitHub: [@albymbiju1](https://github.com/albymbiju1)
- LinkedIn: [Alby M Biju](https://www.linkedin.com/in/albymbiju/)
- Email: albymbiju2002@gmail.com

---

Built with ❤️ using React, TypeScript, and modern web technologies.