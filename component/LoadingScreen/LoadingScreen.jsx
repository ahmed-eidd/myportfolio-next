import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import classes from './LoadingScreen.module.scss';

const LoadingScreen = ({ show }) => {
  const vr = {
    hidden: {
      y: '0vh',
    },
    start: {
      y: show ? '0vh' : '-100vh',
      opacity: 1,
      transition: {
        duration: 2,
        type: 'spring',
      },
    },
    exit: {
      y: '100vh',
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={vr}
        initial='hidden'
        animate='start'
        exit='exit'
        className={classes.container}
      >
        <div className={classes.wrapper}>
          <div className={classes.dot}></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
