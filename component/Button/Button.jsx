import { motion } from 'framer-motion';
import React from 'react';
import classes from './Button.module.scss';

const Button = ({ btnVariant, children, type }) => {
  return (
    <motion.button
      className={classes.Button}
      whileHover={{
        transform: 'translateX(4px)',
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
