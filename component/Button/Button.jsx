import { motion } from 'framer-motion';
import React from 'react';
import classes from './Button.module.scss';

const Button = ({ btnVariant, href, children, type = 'button' }) => {
  return (
    <>
      {type === 'button' && (
        <motion.button
          variants={btnVariant}
          className={classes.Button}
          whileHover={{
            transform: 'translateX(4px)',
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <p>{children}</p>
        </motion.button>
      )}
      {type === 'link' && (
        <motion.a
          target='_blank'
          variants={btnVariant}
          href={href}
          className={classes.Button}
          whileHover={{
            transform: 'translateX(4px)',
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <p>{children}</p>
        </motion.a>
      )}
    </>
  );
};

export default Button;
