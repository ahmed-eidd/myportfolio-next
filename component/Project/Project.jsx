import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import classes from './Project.module.scss';

const Project = ({
  variants,
  img,
  link,
  github,
  name,
  description,
  tech,
  featured = false,
}) => {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <motion.article variants={variants} className={classes.Project}>
      <div className={classes.Project__ImgWrapper}>
        <div className={classes.Project__Img}>
          <Image
            src={img}
            alt={`${name} project screenshot`}
            layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
          />
        </div>
        <div className={classes.Project__Overlay} />
        {featured && <span className={classes.Project__Featured}>Featured</span>}
      </div>

      <div className={classes.Project__Content}>
        <div className={classes.Project__Header}>
          <div className={classes.Project__Icon} aria-hidden="true">
            {initials}
          </div>
          <div><span className={classes.Project__Label}>Project node</span><h3 className={classes.Project__Name}>{name}</h3></div>
        </div>

        <p className={classes.Project__Description}>{description}</p>

        <div className={classes.Project__TechStack}>
          {tech.map((technology) => (
            <span key={technology} className={classes.Project__Tech}>
              {technology}
            </span>
          ))}
        </div>

        <div className={classes.Project__Actions}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.Project__Link} ${classes.Project__LinkPrimary}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            View live system
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${classes.Project__Link} ${classes.Project__LinkSecondary}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default Project;
