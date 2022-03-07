import { motion } from 'framer-motion';
import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Card.module.scss';

const Card = ({ title, yearFrom, yearTo, company, color, icon, variants }) => {
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
    <motion.div className={classes.Card} variants={variants}>
      <div className={extendClasses(classes.Card__Icon, colorClass())}>
        <ion-icon name={icon}></ion-icon>
      </div>
      <h4 className={classes.Card__Title}>{title}</h4>
      <div className={classes.Card__Years}>
        <p className={classes.Card__Years__From}>{yearFrom}</p>
        <div className={classes.Divider}>-</div>
        <p className={classes.Card__Years__To}>{yearTo ? yearTo : 'Now'}</p>
      </div>
      <div className={classes.Dot}></div>
      <p className={classes.Card__Company}>{company}</p>
    </motion.div>
  );
};

export default Card;
