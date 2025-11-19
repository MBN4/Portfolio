import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { personalData } from '../data';
import { DeveloperIllustration } from '../components/Icons';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % personalData.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-lg text-primary mb-2">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">{personalData.name}</h1>
          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10 flex justify-center md:justify-start items-center">
            A&nbsp;
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-secondary"
              >
                {personalData.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8">
            I specialize in building exceptional digital experiences. Currently, I'm focused on creating responsive full-stack web applications.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button href="#contact">Hire Me</Button>
            <Button href={personalData.cvUrl} download="M_Bilal_Resume.pdf" variant="secondary">Download CV</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DeveloperIllustration className="w-full h-auto max-w-md mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;