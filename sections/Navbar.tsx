import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { personalData } from '../data';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials'},
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header background
      setIsScrolled(window.scrollY > 10);

      // Active link highlighting
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
      const scrollPosition = window.scrollY;
      
      let currentSectionId = '';

      // Iterate from bottom to top to find the current section
      for (const section of sections.reverse()) {
        if (section) {
          const sectionTop = section.offsetTop - 88; // 80px nav height + 8px buffer
          if (scrollPosition >= sectionTop) {
            currentSectionId = `#${section.id}`;
            break;
          }
        }
      }
      
      if (currentSectionId) {
          setActiveLink(currentSectionId);
      } else {
          setActiveLink('#home'); // Default to home if no other section is active
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active link on component mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/70 backdrop-blur-lg shadow-lg shadow-green-900/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-20">
        <a href="#home" className="text-2xl font-bold text-white" onClick={() => setActiveLink('#home')}>
          MBN<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-300 ${
                activeLink === link.href
                  ? 'text-primary font-semibold'
                  : 'text-gray-300 hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button href={personalData.cvUrl} download="M_Bilal_Resume.pdf" variant="secondary">Download CV</Button>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark/90 backdrop-blur-lg pb-4"
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 transition-colors duration-300 ${
                  activeLink === link.href
                  ? 'text-primary font-semibold'
                  : 'text-gray-300 hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button href={personalData.cvUrl} download="M_Bilal_Resume.pdf" variant="secondary">Download CV</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
