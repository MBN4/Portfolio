
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projectsData, personalData } from '../data';
import Button from '../components/Button';
import { GithubIcon } from '../components/Icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">My <span className="text-primary">Projects</span></h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on, showcasing my skills in turning ideas into functional and beautiful applications.
        </p>
      </motion.div>
      
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <Button href={personalData.githubProfileUrl} variant="primary">
          <GithubIcon className="inline-block w-5 h-5 mr-2" />
          View All Projects on GitHub
        </Button>
      </motion.div>
    </section>
  );
};

export default Projects;