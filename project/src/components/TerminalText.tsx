import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TerminalTextProps {
  text: string;
  className?: string;
}

const TerminalText: React.FC<TerminalTextProps> = ({ text, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`font-mono ${className}`}
    >
      <span className="text-[#7928ca]">$ </span>
      <span className="text-white">{displayedText}</span>
      <span className={`text-[#7928ca] ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>▋</span>
    </motion.div>
  );
};

export default TerminalText;