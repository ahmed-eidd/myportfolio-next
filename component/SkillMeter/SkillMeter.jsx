import { motion, animate, useMotionValue } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './SkillMeter.module.scss';

const SkillMeter = ({
  skill,
  className,
  percentage,
  color,
  variants,
  textVariant,
  animate,
  hidden,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   if (inView) {
  //     const controls = animate(0, percentage, {
  //       duration: 2,
  //       onUpdate(value) {
  //         ref.current.textContent = `${value.toFixed(0)}%`;
  //       },
  //     });
  //     return () => controls.stop();
  //   }
  // }, [inView]);

  const colorClass = () => {
    let newColor = null;
    switch (color) {
      case 'purple':
        newColor = classes.purple;
        break;
      case 'yellow':
        newColor = classes.yellow;
        break;
      case 'green':
        newColor = classes.green;
        break;
      case 'orange':
        newColor = classes.orange;
        break;
      default:
        break;
    }

    return newColor;
  };

  return (
    <div className={extendClasses(classes.SkillMeter, className)}>
      <div className={classes.SkillMeter__TextContainer}>
        <motion.p
          onViewportEnter={() => {
            setInView(true);
          }}
          onViewportLeave={() => {
            setInView(false);
          }}
          transition={{
            duration: 2,
          }}
          className={classes.SkillMeter__Skill}
        >
          {skill}
        </motion.p>
        <motion.p
          variants={textVariant}
          ref={ref}
          className={classes.SkillMeter__Percentage}
          animate={animate}
          initial={hidden}
        >
          {/* {variants.show.width} */}
          {number < 0 ? 0 : number?.toFixed(0)}%
        </motion.p>
      </div>
      <div className={extendClasses(classes.SkillMeter__Meter)}>
        <motion.div
          className={extendClasses(
            classes.SkillMeter__Meter__Color,
            colorClass()
          )}
          // whileInView={{
          //   width: `${percentage}%`,
          // }}
          // transition={{
          //   ease: [0.6, 0.01, -0.05, 0.95],
          //   duration: 1.6,
          //   repeat: 'none',
          // }}
          onUpdate={({ width }) => {
            console.log(width);
            setNumber(parseInt(width));
          }}
          variants={variants}
          animate={animate}
          initial={hidden}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillMeter;
