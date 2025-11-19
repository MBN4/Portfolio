
import React from 'react';
import { motion } from 'framer-motion';
import { personalData, skillsData, experienceData } from '../data';
import SkillIcon from '../components/SkillIcon';
import TimelineItem from '../components/TimelineItem';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">{personalData.about}</p>
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center lg:text-left mb-8">My Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {skillsData.map(skill => (
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center lg:text-left mb-8">My Journey</h3>
          <div className="relative border-l-2 border-gray-700">
            {experienceData.map((exp, index) => (
              <TimelineItem key={index} experience={exp} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
