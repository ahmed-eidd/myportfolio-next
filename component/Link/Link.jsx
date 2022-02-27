import React from 'react';
import NextLink from 'next/link';
import classes from './Link.module.scss';
import WithDotCursor from '../../hoc/withDotCursor/WithDotCursor';

const Link = ({ name, href, newTab, icon }) => {
  return (
    <NextLink href={href}>
      <a className={classes.Link} target={newTab ? '_blank' : '_self'}>
        {icon ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <ion-icon name={icon}></ion-icon> <p>{name}</p>
          </div>
        ) : (
          name
        )}
      </a>
    </NextLink>
  );
};

export default WithDotCursor(Link);
