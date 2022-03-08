import React from 'react';
import classes from './SplashScreen.module.scss';

const SplashScreen = () => {
  return (
    <div className={classes.Container}>
      <svg width={200} height={200} viewBox='0 0 100 100'>
        <polyline
          className={ classes.stroke__still }
          points='0,0 100,0 100,100'
          strokeWidth={10}
          fill='none'
        />
        <polyline
          className={ classes.stroke__still }
          points='0,0 0,100 100,100'
          strokeWidth={10}
          fill='none'
        />
        <polyline
          className={ classes.stroke__animation }
          points='0,0 100,0 100,100'
          strokeWidth={10}
          fill='none'
        />
        <polyline
          className={ classes.stroke__animation }
          points='0,0 0,100 100,100'
          strokeWidth={10}
          fill='none'
        />
      </svg>

      <div className={classes.loading}>
        <div className={classes.loading__text}>
          <span className={classes.loading__text__words}>L</span>
          <span className={classes.loading__text__words}>O</span>
          <span className={classes.loading__text__words}>A</span>
          <span className={classes.loading__text__words}>D</span>
          <span className={classes.loading__text__words}>I</span>
          <span className={classes.loading__text__words}>N</span>
          <span className={classes.loading__text__words}>G</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
