import React from 'react';
import Divider from '../Divider/Divider';
import Link from '../Link/Link';
import SectionLink from '../SectionLink/SectionLink';
import Span from '../Span/Span';
import classes from './Header.module.scss';
import AnimatedText from '../AnimatedText/AnimatedText';
import { motion } from 'framer-motion';

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Header = ({ aboutRef, projectsRef }) => {
  const onScrollHandler = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classes.Header}>
      <div className={classes.Header__Content}>
        <div className={classes.Header__Titles}>
          <h2>
            Ahmed <Span>Eid</Span>
          </h2>
          <p>
            Front / React End<Span color='green'> Developer </Span>
          </p>
          <Divider />
          <motion.div
            className='App'
            initial='hidden'
            // animate="visible"
            animate='visible'
            variants={container}
          >
            <AnimatedText text='hello world' tag='heading2' />
          </motion.div>
        </div>

        <div className={classes.Header__SectionLinks}>
          <SectionLink
            onClick={() => {
              onScrollHandler(projectsRef);
            }}
            name='Projects'
          />
          <SectionLink
            onClick={() => {
              onScrollHandler(aboutRef);
            }}
            name='About Me'
          />
        </div>
        <div className={classes.Header__Links}>
          <Link
            icon='logo-github'
            href='https://github.com/ahmed-eidd'
            name='Github'
            newTab
          />
          <Link
            icon='logo-linkedin'
            href='https://www.linkedin.com/in/ahmed-eidd/'
            name='Linkedin'
            newTab
          />
          <Link
            icon='document-text-outline'
            href='https://drive.google.com/file/d/1t4ORNkuZFUsgbXv5S4ks_w4TBfE8PRve/view?usp=sharing'
            name='Resume'
            newTab
          />
          <Link
            icon='mail-unread-outline'
            href='mailto:ahmedeid.webdev@gmail.com'
            name='Email Me'
            newTab
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
