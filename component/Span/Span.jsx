import React from 'react';
import classes from './Span.module.scss';

const Span = ({ children, color = 'purple' }) => {
  const colorCSS = () => {
    switch (color) {
      case 'purple':
        return classes.purple;
      case 'green':
        return classes.green;
      case 'yellow':
        return classes.green;
      case 'orange':
        return classes.orange;
      default:
        break;
    }
    classes.color;
  };
  return <span className={colorCSS()}>{children}</span>;
};

export default Span;
