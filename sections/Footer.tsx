
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GithubIcon, LinkedinIcon, XIcon } from '../components/Icons';
import { personalData } from '../data';

const socialLinks = [
  { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/MBN4' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/bilal-nadeem-26b576356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'X', icon: XIcon, url: 'https://x.com/mbn3094' },
];

// Fix: Add Variants type to help TypeScript infer correct literal types for transition properties.
const bgCircleVariants: Variants = {
  rest: { scale: 0 },
  hover: { scale: 1, transition: { duration: 0.3, ease: 'circOut' } },
};

// Fix: Add Variants type to help TypeScript infer correct literal types for transition properties.
const iconVariants: Variants = {
  rest: { y: 0, color: '#9ca3af' }, // gray-400
  hover: { 
    y: -3, 
    color: '#ffffff', 
    scale: 1.1, 
    transition: { type: 'spring', stiffness: 300, damping: 10 } 
  },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark/50 border-t border-green-500/20 py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="relative w-12 h-12 flex items-center justify-center rounded-full"
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                variants={bgCircleVariants}
              />
              <motion.div className="relative" variants={iconVariants}>
                <social.icon className="w-6 h-6" />
              </motion.div>
            </motion.a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;