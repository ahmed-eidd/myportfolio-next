import { motion } from 'framer-motion';
import React from 'react';
import Project from '../Project/Project';
import classes from './Projects.module.scss';
import { projectsConfing } from './ProjectsConfig';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0.4, 0, 0.2, 1],
      duration: 0.6,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className={classes.Projects}>
      <motion.div
        className={classes.Projects__Header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={classes.Projects__Eyebrow}>Selected work</div>
        <div className={classes.Projects__HeadingRow}>
          <h2 className={classes.Projects__Title}>Featured projects</h2>
        </div>
        <p className={classes.Projects__Subtitle}>
          A selection of digital products I have designed and developed for ambitious teams.
        </p>
      </motion.div>

      <motion.div
        className={classes.Projects__Grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsConfing.map((project, index) => (
          <Project
            key={project.name}
            variants={itemVariants}
            {...project}
            featured={index === 0}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
