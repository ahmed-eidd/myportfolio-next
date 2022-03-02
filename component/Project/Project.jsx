import { motion } from 'framer-motion';
import React from 'react';
import Button from '../Button/Button';
import classes from './Project.module.scss';
import Image from 'next/image';
import Skills from '../Skills/Skills';

const Project = ({
  variants,
  img,
  link,
  github,
  name,
  description,
  skills,
}) => {
  return (
    <motion.div variants={variants} className={classes.Project}>
      {/* <div className={classes.Project__Img}> */}
      <div className={classes.Project__Img}>
        <Image layout='fill' objectFit='cover' src={img} alt={`${name} img`} />
      </div>
      {/* </div> */}
      <div className={classes.Project__TextContainer}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Skills skills={skills} />
        <div className={classes.Project__Btns} style={{ display: 'flex' }}>
          <Button to={link}>Live Demo</Button>
          <Button type='link' to={github}>
            GIthub
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
