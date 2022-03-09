import { motion } from 'framer-motion';
import React from 'react';
import Divider from '../Divider/Divider';
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
      id='ref2'
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
    >
      <div className={classes.Projects__Info}>
        <h2 className={classes.Projects__Title}>My Projects</h2>
        <Divider className={classes.Projects__Divider} />
      </div>
      {projectsConfing.map((prj, i) => (
        <Project
          variants={vr}
          name={prj.name}
          description={prj.description}
          img={prj.img}
          link={prj.link}
          github={prj.github}
          skills={prj.tech}
          key={prj.name}
        />
      ))}
    </motion.div>
  );
};

export default Projects;
