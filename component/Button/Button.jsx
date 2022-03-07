import { motion } from 'framer-motion';
import React from 'react';
import WithDotCursor from '../../hoc/withDotCursor/WithDotCursor';
import classes from './Button.module.scss';

const Button = ({ onClick, btnVariant, href, children, type = 'button' }) => {
  return (
    <>
      {type === 'button' && (
        <motion.button
          onClick={onClick}
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
          onClick={onClick}
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

export default WithDotCursor(Button);
