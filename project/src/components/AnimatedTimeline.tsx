import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'work' | 'education';
}

const events: TimelineEvent[] = [
  {
    year: '2024-26',
    title: 'Master of Computer Applications',
    description: 'Amal Jyothi College of Engineering, Kanjirappally',
    type: 'education'
  },
  {
    year: '2020-23',
    title: 'Bachelor of Computer Applications',
    description: 'St George College Aruvithura',
    type: 'education'
  },
  {
    year: '2017-20',
    title: '10th and Plus Two',
    description: 'St Mary\'s Higher Secondary School Bharananganam',
    type: 'education'
  }
];

const AnimatedTimeline: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-[#333] transform -translate-x-1/2"></div>
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-16 mb-12 last:mb-0"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute left-8 w-8 h-8 bg-[#1a1a1a] rounded-full border-2 border-[#7928ca] transform -translate-x-1/2 flex items-center justify-center"
          >
            {event.type === 'work' ? (
              <Briefcase size={16} className="text-[#7928ca]" />
            ) : (
              <GraduationCap size={16} className="text-[#7928ca]" />
            )}
          </motion.div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-[#4a4a4a] transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className="text-[#7928ca]" />
              <span className="text-[#7928ca] font-mono">{event.year}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">{event.title}</h3>
            <p className="text-gray-400">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedTimeline;