import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, Layout, Users, Zap } from 'lucide-react';
import CodeBlock from './CodeBlock';

interface CaseStudyProps {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  codeSnippet: {
    code: string;
    language: string;
  };
  results: string[];
  image: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  description,
  challenge,
  solution,
  techStack,
  codeSnippet,
  results,
  image
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#333]"
    >
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-4 font-mono">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-4 font-mono">
              <Users className="text-[#7928ca]" />
              Challenge
            </h4>
            <p className="text-gray-400">{challenge}</p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-4 font-mono">
              <Zap className="text-[#7928ca]" />
              Solution
            </h4>
            <p className="text-gray-400">{solution}</p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-4 font-mono">
            <FileCode2 className="text-[#7928ca]" />
            Implementation
          </h4>
          <div className="mb-6">
            <CodeBlock code={codeSnippet.code} language={codeSnippet.language} />
          </div>
        </div>

        <div className="mb-8">
          <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-4 font-mono">
            <Layout className="text-[#7928ca]" />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-[#2a2a2a] text-[#7928ca] rounded-full text-sm font-mono"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-white mb-4 font-mono">Results</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-400">
                <span className="text-[#7928ca]">→</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;