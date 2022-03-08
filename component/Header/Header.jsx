import React from 'react';
import Divider from '../Divider/Divider';
import Link from '../Link/Link';
import SectionLink from '../SectionLink/SectionLink';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__Content}>
        <div className={classes.Header__Titles}>
          <h2>
            Ahmed Eid
          </h2>
          <p>Front/React End Developer </p>
          <Divider />
        </div>
        <div className={classes.Header__SectionLinks}>
          <SectionLink name='Projects' />
          <SectionLink name='About Me' />
          <SectionLink name='Contact' />
        </div>
        <div className={classes.Header__Links}>
          <Link icon='logo-github' href='#' name='Github' newTab />
          <Link icon='logo-linkedin' href='#' name='Linkedin' newTab />
          <Link icon='document-text-outline' href='#' name='Resume' newTab />
          <Link icon='mail-unread-outline' href='#' name='Email' newTab>
            AhmedEid.webdev@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
