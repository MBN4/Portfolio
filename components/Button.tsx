import React from 'react';
// Note: framer-motion is assumed to be in the environment.
import { motion, HTMLMotionProps } from 'framer-motion';

// Fix: Replaced React.ButtonHTMLAttributes with framer-motion's HTMLMotionProps<'button'>
// to resolve type conflicts for props like 'onDrag' and ensure compatibility with <motion.button>.
interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  download?: boolean | string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '',
  download = false,
  ...props
}) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark";
  
  const variantClasses = {
    primary: "bg-primary hover:bg-secondary text-white focus:ring-primary",
    secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${className} inline-block`}
        {...motionProps}
        download={download}
        target={href.startsWith('#') ? '_self' : '_blank'}
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;