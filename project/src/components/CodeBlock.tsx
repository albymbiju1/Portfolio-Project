import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-lg overflow-hidden"
    >
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          padding: '1.5rem',
          borderRadius: '0.5rem',
          margin: 0,
          backgroundColor: '#1a1a1a',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </motion.div>
  );
};

export default CodeBlock;