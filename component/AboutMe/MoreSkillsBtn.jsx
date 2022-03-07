import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import classes from './AboutMe.module.scss';
import { MouseContext } from '../../context/mouse-context';

const MoreSkillsBtn = ({ onClick, moreSkills }) => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div
      onMouseEnter={() => {
        cursorChangeHandler(true);
      }}
      onMouseLeave={() => cursorChangeHandler(false)}
      className={classes.AboutMe__Skills__MoreSkillsBtn}
      onClick={onClick}
    >
      <motion.div
        animate={{
          rotateX: moreSkills ? '180deg' : 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <ion-icon
          style={{ PointerEvent: 'none' }}
          name='chevron-down-outline'
        ></ion-icon>
      </motion.div>
    </div>
  );
};

export default MoreSkillsBtn;
