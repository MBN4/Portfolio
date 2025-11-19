
import React from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '../types';

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const TimelineItem: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <motion.div variants={itemVariants} className="relative pl-8 sm:pl-12 py-4 group">
      {/* Vertical line */}
      <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-700 group-hover:bg-primary transition-colors duration-300"></div>
      {/* Dot */}
      <div className="absolute top-5 left-[-6.5px] sm:left-[-8.5px] w-4 h-4 rounded-full bg-gray-700 border-2 border-dark group-hover:bg-primary group-hover:scale-110 transition-all duration-300"></div>

      <p className="text-sm text-green-400 mb-1">{experience.year}</p>
      <h4 className="text-lg font-bold text-gray-100">{experience.role}</h4>
      <p className="text-md font-semibold text-gray-400 mb-2">{experience.company}</p>
      <p className="text-sm text-gray-300 leading-relaxed">{experience.description}</p>
    </motion.div>
  );
};

export default TimelineItem;
