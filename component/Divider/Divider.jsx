import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Divider.module.scss';

const Divider = ({ style, className, width, direction }) => {
  return (
    <div
      style={style}
      className={extendClasses(classes.Divider, className)}
    ></div>
  );
};

export default Divider;
