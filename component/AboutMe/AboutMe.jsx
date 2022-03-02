import { motion } from 'framer-motion';
import React from 'react';
import Tabs from '../Tabs/Tabs';
import classes from './AboutMe.module.scss';

const vr = {
  hidden: {
    opacity: 0,
    y: '100vh',
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      repeat: 'none',
    },
  },
};
const AboutMe = () => {
  return (
    <div className={classes.AboutMe}>
      <motion.div
        variants={vr}
        initial='hidden'
        whileInView='show'
        className={classes.AboutMe__Content}
      >
        <Tabs
          tabsLabel={[
            { label: 'About Me', icon: 'person-outline' },
            { label: 'Experience', icon: 'briefcase-outline' },
            { label: 'Education', icon: 'medal-outline' },
          ]}
        >
          <h1>hi</h1>
          <h1>h2</h1>
          <h1>h3</h1>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default AboutMe;
