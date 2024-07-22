import React from 'react';
import Divider from '../Divider/Divider';
import Link from '../Link/Link';
import SectionLink from '../SectionLink/SectionLink';
import Span from '../Span/Span';
import classes from './Header.module.scss';
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
            download
            icon='document-text-outline'
            href='/Projects/Ahmed-Eid-Resume.pdf'
            name='Resume'
            // newTab
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
