import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code, Cpu, Braces, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import TerminalText from './components/TerminalText';
import AnimatedTimeline from './components/AnimatedTimeline';
import SkillChart from './components/SkillChart';
import CaseStudy from './components/CaseStudy';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // State for form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to about section
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Download CV
  const handleDownloadCV = () => {
    const cvUrl = '/images/Alby M Biju_Resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Alby-M-Biju-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#7928ca] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#2a2a2a]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute top-0 right-0 p-8 flex gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, color: '#7928ca' }}
              href="https://github.com/albymbiju1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#7928ca' }}
              href="https://linkedin.com/in/albymbiju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#7928ca' }}
              href="mailto:albymbiju2002@gmail.com"
              className="text-gray-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.nav>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-block"
            >
              <Terminal size={64} className="text-[#7928ca]" />
            </motion.div>
            <TerminalText 
              text="Hello, I am"
              className="text-4xl md:text-6xl font-bold mb-2"
            />
            <TerminalText 
              text="Alby M Biju"
              className="text-4xl md:text-6xl font-bold mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-gray-400 text-xl mb-8"
            >
              From concept to code — I craft user-friendly, modern websites.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="flex gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-3 bg-[#7928ca] text-white rounded-lg font-mono hover:bg-[#9f44e8] transition-colors"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="px-8 py-3 border-2 border-[#7928ca] text-[#7928ca] rounded-lg font-mono hover:bg-[#7928ca] hover:text-white transition-colors"
              >
                Download CV
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToAbout}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={32} className="text-[#7928ca]" />
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <TerminalText
            text="About Me"
            className="text-3xl font-bold text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">My Journey</h3>
              <AnimatedTimeline />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Proficiency</h3>
              <SkillChart />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <TerminalText
            text="Featured Projects"
            className="text-3xl font-bold text-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="SmartJewel"
              description="an intelligent Jewellery e-commerce platform using Flask and React with real-time gold price prediction, dynamic pricing algorithms, and a machine learning-based recommendation system. Integrated Razorpay API for secure transactions and MongoDB for scalable storage"
              image="/images/projectImage1.png"
              codeSnippet={{
                code: `export const Logout: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();`,
                language: "javascript"
              }}
              tags={["React", "TypeScript", "Flask"]}
              links={{
                demo: "https://smartjewel-p523.onrender.com",
                github: "https://github.com/albymbiju1/SmartJewel"
              }}
            />
            <ProjectCard
              title="LMS-Learning Management System"
              description="A lightweight PHP-MySQL based Learning Management System (LMS) for managing courses, assignments, quizzes, and student-instructor interactions efficiently."
              image="/images/projectImage2.png"
              codeSnippet={{
                code: `if (!isset($_GET['id'])) {
    $_SESSION['error'] = "Assignment ID is required";
    header("Location: assignments.php");
    exit();
}
`,
                language: "javascript"
              }}
              tags={["PHP", "MySQL", "jQuery"]}
              links={{
                demo: "https://learning-management-system.ct.ws",
                github: "https://github.com/albymbiju1/LMS"
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 max-w-2xl">
          <TerminalText
            text="Let's Connect"
            className="text-3xl font-bold text-center mb-16"
          />
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-[#333] text-white focus:border-[#7928ca] focus:ring focus:ring-[#7928ca] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-[#333] text-white focus:border-[#7928ca] focus:ring focus:ring-[#7928ca] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-[#333] text-white focus:border-[#7928ca] focus:ring focus:ring-[#7928ca] focus:ring-opacity-50"
              ></motion.textarea>
            </div>
            {/* Status Messages */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-center ${
                  submitStatus === 'success'
                    ? 'bg-green-900/50 text-green-300 border border-green-700'
                    : 'bg-red-900/50 text-red-300 border border-red-700'
                }`}
              >
                {submitMessage}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg transition-all duration-300 font-mono ${
                isSubmitting
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-[#7928ca] text-white hover:bg-[#9f44e8] hover:shadow-lg hover:shadow-[#7928ca]/25'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400">© 2025 Portfolio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                href="https://github.com/albymbiju1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7928ca] transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                href="www.linkedin.com/in/albymbiju"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7928ca] transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                href="albymbiju2002@gmail.com"
                className="text-gray-400 hover:text-[#7928ca] transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;