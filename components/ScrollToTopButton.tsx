import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon } from './Icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      setIsVisible(scrollY > 200);
      // Check if the user is at the very bottom (with a small 2px tolerance)
      setIsAtBottom(winHeight + scrollY >= docHeight - 2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <button
            onClick={handleClick}
            className="relative w-14 h-14 rounded-full bg-gray-800/80 backdrop-blur-sm focus:outline-none transition-transform duration-300 hover:scale-110"
            aria-label={isAtBottom ? 'Scroll to top' : 'Scroll to bottom'}
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Progress Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                strokeWidth="6"
                stroke="#16a34a" // primary color
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white"
              animate={{ rotate: isAtBottom ? -180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowDownIcon className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;