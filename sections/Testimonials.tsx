import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import type { PanInfo } from 'framer-motion';
import { testimonialsData } from '../data';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from '../components/Icons';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalItems = testimonialsData.length;

  const getPrevIndex = (currentIndex: number) => (currentIndex - 1 + totalItems) % totalItems;
  const getNextIndex = (currentIndex: number) => (currentIndex + 1) % totalItems;

  const changeSlide = useCallback((newDirection: number) => {
    setIndex(prevIndex => (prevIndex + newDirection + totalItems) % totalItems);
  }, [totalItems]);

  useEffect(() => {
    if (isHovered) {
      return;
    }
    const slideInterval = setInterval(() => {
      changeSlide(1);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [isHovered, changeSlide]);
  
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const swipeThreshold = 50;
    const swipePower = Math.abs(offset.x) * velocity.x;

    if (swipePower < -swipeThreshold) {
      changeSlide(1);
    } else if (swipePower > swipeThreshold) {
      changeSlide(-1);
    }
  };

  const renderCard = (itemIndex: number, position: 'prev' | 'current' | 'next') => {
    const testimonial = testimonialsData[itemIndex];
    const isCurrent = position === 'current';

    const variants: Variants = {
      enter: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
      center: { 
        opacity: isCurrent ? 1 : 0.6, 
        scale: isCurrent ? 1 : 0.85, 
        filter: isCurrent ? 'blur(0px)' : 'blur(3px)',
        zIndex: isCurrent ? 10 : 1,
        x: position === 'prev' ? '-55%' : position === 'next' ? '55%' : '0%',
        transition: { type: 'spring', stiffness: 300, damping: 30 }
      },
    };

    return (
      <motion.div
        key={itemIndex}
        variants={variants}
        initial="enter"
        animate="center"
        className={`absolute w-full max-w-lg p-6 md:p-8 cursor-grab ${isCurrent ? 'active:cursor-grabbing' : 'pointer-events-none'}`}
        drag={isCurrent ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-green-500/20 shadow-lg shadow-green-900/10 text-center flex flex-col items-center justify-center h-full">
            <QuoteIcon className="w-12 h-12 text-primary/50 mb-4" />
            <p className="text-md md:text-lg italic text-gray-300 mb-6 h-32 overflow-y-scroll no-scrollbar">{testimonial.quote}</p>
            <div className="flex items-center mt-auto">
                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-primary" />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
            </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Kind Words From <span className="text-primary">Clients</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Discover what others have to say about my work and dedication.
        </p>
      </motion.div>

      <div 
        className="relative max-w-5xl mx-auto h-[28rem] flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false}>
            {renderCard(getPrevIndex(index), 'prev')}
            {renderCard(index, 'current')}
            {renderCard(getNextIndex(index), 'next')}
        </AnimatePresence>

        <button 
          onClick={() => changeSlide(-1)} 
          className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-20 bg-primary/50 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button 
          onClick={() => changeSlide(1)} 
          className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 z-20 bg-primary/50 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;