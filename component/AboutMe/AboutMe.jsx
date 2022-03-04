import { css } from '@emotion/css';
import { motion } from 'framer-motion';
import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import SkillMeter from '../SkillMeter/SkillMeter';
import Tabs from '../Tabs/Tabs';
import classes from './AboutMe.module.scss';

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.45],
      duration: 1.6,
      repeat: 'none',
    },
  },
  exit: {
    opacity: 0,
  },
};
const AboutMe = () => {
  const MeterAnimation = (per) => {
    return {
      hidden: {
        opacity: 0,
        width: 0,
      },
      show: {
        opacity: 1,
        width: `${per}%`,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.45],
          duration: 1.6,
          repeat: 'none',
        },
      },
    };
  };
  return (
    <div className={classes.AboutMe}>
      <motion.div
        // variants={vr}
        // initial='hidden'
        // whileInView='show'
        transition={{
          staggerChildren: 0.4,
        }}
        className={classes.AboutMe__Content}
      >
        <Tabs
          className={classes.AboutMe__Tabs}
          tabsLabel={[
            { label: 'About Me', icon: 'person-outline' },
            { label: 'Experience', icon: 'briefcase-outline' },
            { label: 'Education', icon: 'medal-outline' },
          ]}
        >
          <div>
            <div className={classes.AboutMe__Skills}>
              <h2>Skills</h2>
              <motion.div
                variants={container}
                initial='hidden'
                whileInView='show'
              >
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='ReactJs'
                  color='purple'
                  percentage={90}
                  variants={MeterAnimation(90)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='NextJs'
                  color='green'
                  percentage={80}
                  variants={MeterAnimation(80)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Redux'
                  color='yellow'
                  percentage={90}
                  variants={MeterAnimation(90)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Redux-Saga'
                  color='orange'
                  percentage={85}
                  variants={MeterAnimation(85)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Redux Thunk'
                  color='purple'
                  percentage={85}
                  variants={MeterAnimation(85)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Javascript'
                  color='green'
                  percentage={90}
                  variants={MeterAnimation(90)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='HTML'
                  color='yellow'
                  percentage={90}
                  variants={MeterAnimation(90)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='CSS'
                  color='orange'
                  percentage={90}
                  variants={MeterAnimation(90)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Sass'
                  color='purple'
                  percentage={90}
                  variants={MeterAnimation(90)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Responsive Design'
                  color='green'
                  percentage={90}
                  variants={MeterAnimation(90)}
                  textVariant={textAnimation}
                />
              </motion.div>
            </div>
          </div>
          <div className={classes.AboutMe__Experience}>h22</div>
          <div className={classes.AboutMe__Education}>h33</div>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default AboutMe;
