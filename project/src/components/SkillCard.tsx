import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-xl shadow-lg transition-all duration-300"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default SkillCard;