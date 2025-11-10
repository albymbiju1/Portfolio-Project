import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  codeSnippet?: {
    code: string;
    language: string;
  };
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  codeSnippet,
  tags,
  links
}) => {
  const handleViewProject = () => {
    if (links.demo) {
      window.open(links.demo, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#333] hover:border-[#4a4a4a] transition-all duration-300"
    >
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative h-48 overflow-hidden cursor-pointer"
          onClick={handleViewProject}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-[#7928ca] bg-opacity-70 flex items-center justify-center"
          >
            <span className="text-white text-lg font-mono">View Project</span>
          </motion.div>
        </motion.div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          {links.github && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#2a2a2a] rounded-full text-[#7928ca] hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
          )}
          {links.demo && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#2a2a2a] rounded-full text-[#7928ca] hover:text-white transition-colors"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white font-mono">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        {codeSnippet && (
          <div className="mb-4">
            <CodeBlock code={codeSnippet.code} language={codeSnippet.language} />
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-[#2a2a2a] text-[#7928ca] rounded-full text-sm font-mono"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;