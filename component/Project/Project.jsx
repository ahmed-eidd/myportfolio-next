import { motion } from 'framer-motion';
import React from 'react';
import Button from '../Button/Button';
import classes from './Project.module.scss';

const Project = ({ variants, reverse }) => {
  return (
    <motion.div
      style={{
        flexDirection: !reverse ? 'row' : 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
      variants={variants}
      className={classes.Project}
    >
      <div className={classes.Project__Img}>image</div>
      <div className={classes.Project__TextContainer}>
        <h2>title</h2>
        <p>description</p>
        <Button>Button</Button>
        <Button>Button</Button>
      </div>
    </motion.div>
  );
};

export default Project;
