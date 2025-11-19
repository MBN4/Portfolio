
import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-green-500/20 text-center"
      whileHover={{ scale: 1.1, y: -5, color: '#22c55e' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <skill.icon className="w-12 h-12" />
      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
    </motion.div>
  );
};

export default SkillIcon;
