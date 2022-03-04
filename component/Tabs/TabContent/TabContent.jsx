import { motion } from 'framer-motion';
import React from 'react';
import classes from './TabContent.module.scss';

const TabContent = ({ children, index }) => {
  return (
    <div className={classes.Container}>
      <motion.div
        transition={{
          tension: 190,
          friction: 70,
          mass: 0.4,
        }}
        initial={false}
        animate={{ x: index * -100 + '%' }}
        className={classes.Animation}
      >
        {React.Children.map(children, (child, i) => (
          <div
            key={i}
            // style={{ display: i === index ? 'block' : 'none' }}
            aria-hidden={index !== i}
            tabIndex={index === i ? 0 : -1}
            className={classes.Content}
          >
            {/* {console.log(index === i)} */}
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TabContent;
