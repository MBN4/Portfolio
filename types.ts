
import type React from 'react';

export interface Project {
  title: string;
  techStack: string[];
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}
