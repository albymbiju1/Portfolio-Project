import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 95, color: '#7928ca' },
  { name: 'React', level: 95, color: '#0ea5e9' },
  { name: 'UI/UX Design', level: 90, color: '#22c55e' },
  { name: 'Node.js', level: 85, color: '#eab308' },
  { name: 'MongoDB', level: 85, color: '#ec4899' }
];

const SkillChart: React.FC = () => {
  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <div className="flex justify-between mb-2">
            <span className="text-white font-mono">{skill.name}</span>
            {/* Removed numeric percentage display */}
          </div>
          <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: skill.color }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillChart;
