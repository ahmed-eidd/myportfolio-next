import { motion } from 'framer-motion';
import React from 'react';
import Project from '../Project/Project';
import classes from './Projects.module.scss';
import { projectsConfing } from './ProjectsConfig';

const vr = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
      repeat: 'none',
    },
  },
  // exit: {
  //   opacity: 1,
  //   transition: {
  //     ease: 'easeInOut',
  //     duration: 0,
  //   },
  // },
};

const Projects = () => {
  return (
    <motion.div
      className={classes.Projects}
      viewport={{ once: true }}
      variants={{
        show: {
          transition: {
            staggerChildren: 0.4,
          },
        },
      }}
      initial='hidden'
      whileInView='show'
      // exit='hidden'
      id='ref1'
    >
      {projectsConfing.map((prj, i) => (
        <Project
          variants={vr}
          name={prj.name}
          description={prj.description}
          img={prj.img}
          link={prj.link}
          skills={prj.tech}
          key={prj.name}
        />
      ))}
    </motion.div>
  );
};

export default Projects;
