
import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import Button from './Button';
import { GithubIcon, LinkIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg shadow-green-900/20 border border-green-500/20"
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-green-900/50 text-green-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>
        <div className="flex gap-4">
          <Button href={project.githubUrl} variant="secondary" className="flex-1 text-center">
            <GithubIcon className="inline-block w-5 h-5 mr-2" /> GitHub
          </Button>
          <Button href={project.liveUrl} variant="primary" className="flex-1 text-center">
             <LinkIcon className="inline-block w-5 h-5 mr-2" /> Live
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
