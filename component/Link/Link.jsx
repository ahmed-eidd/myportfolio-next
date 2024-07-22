import React from 'react';
import NextLink from 'next/link';
import classes from './Link.module.scss';
import WithDotCursor from '../../hoc/withDotCursor/WithDotCursor';

const Link = ({ name, href, newTab, icon,  download }) => {
  const linkContent = (
    <a
      {...(download ? { href: href } : {})}
      className={classes.Link}
      target={newTab ? '_blank' : '_self'}
      download="Ahmed-Eid-Resume.pdf"
    rel="noopener noreferrer"
    >
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
  );
  return (
    <>
      {download ? linkContent : <NextLink href={href}>{linkContent}</NextLink>}
    </>
  );
};

export default WithDotCursor(Link);
