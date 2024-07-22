import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import Card from '../Card/Card';
import SkillMeter from '../SkillMeter/SkillMeter';
import Skills from '../Skills/Skills';
import Tabs from '../Tabs/Tabs';
import classes from './AboutMe.module.scss';
import MoreSkillsBtn from './MoreSkillsBtn';

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
  const [moreSkills, setMoreSkills] = useState(false);

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
        transition={{
          staggerChildren: 0.4,
        }}
        className={classes.AboutMe__Content}
      >
        <div className={classes.AboutMe__Personal}>
          <div className={classes.AboutMe__Personal__About}>
            <h2 className={classes.AboutMe__Personal__About__Title}>
              About ME
            </h2>
            <p className={classes.AboutMe__Personal__About__Text}>
              My name is <span className={classes.TextPurple}> Ahmed Eid </span>
              a Front End Developer based in Cairo, Egypt. Like many other
              people, I enjoy spending my free time increasing my knowledge of
              Web Development and building new and challenging projects using
              <strong> React, Redux, NextJs</strong> and many Front end
              Technologies
            </p>
          </div>
          <div className={classes.AboutMe__Personal__Interests}>
            <h2 className={classes.AboutMe__Personal__Interests__Title}>
              Interests
            </h2>
            <Skills skills={['Chess', 'Video Games', 'Reading', 'Movies']} />
          </div>
        </div>
        <Tabs
          className={classes.AboutMe__Tabs}
          tabsLabel={[
            { label: 'My Skills', icon: 'person-outline' },
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
                animate={{
                  height: !moreSkills ? '37rem' : '70rem',
                }}
                transition={{
                  duration: 0.5,
                }}
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
                  percentage={90}
                  variants={MeterAnimation(80)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Typescript'
                  color='yellow'
                  percentage={90}
                  variants={MeterAnimation(80)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Redux'
                  color='orange'
                  percentage={90}
                  variants={MeterAnimation(90)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Redux-Saga'
                  color='purple'
                  percentage={85}
                  variants={MeterAnimation(85)}
                  textVariant={textAnimation}
                />
                <SkillMeter
                  className={classes.AboutMe__Skills__Skill}
                  skill='Redux Thunk'
                  color='green'
                  percentage={85}
                  variants={MeterAnimation(85)}
                  textVariant={textAnimation}
                />

                <motion.div
                  animate={{
                    opacity: moreSkills ? 1 : 0,
                  }}
                >
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
                <MoreSkillsBtn
                  moreSkills={moreSkills}
                  onClick={() => setMoreSkills(!moreSkills)}
                />
              </motion.div>
            </div>
          </div>
          <motion.div className={classes.AboutMe__Experience}>
            <Card
              title='Front End Developer'
              yearFrom='Nov 2022'
              yearTo='Present'
              company='Taqneen Solutions'
              color='purple'
              icon='briefcase-outline'
            />
            <Card
              title='Front End Developer'
              yearFrom='June 2022'
              yearTo='Nov 2022'
              company='Hyper Media Labs'
              color='green'
              icon='briefcase-outline'
            />
          </motion.div>
          <motion.div className={classes.AboutMe__Education}>
            <Card
              title='Facutly of laws'
              yearFrom='2015'
              yearTo='2019'
              color='purple'
              company='Cairo University'
              icon='briefcase-outline'
            />
          </motion.div>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default AboutMe;
