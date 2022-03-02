import { motion } from 'framer-motion';
import React, { forwardRef, useContext } from 'react';
import { MouseContext } from '../../../context/mouse-context';
import WithDotCursor from '../../../hoc/withDotCursor/WithDotCursor';
import { extendClasses } from '../../../utilities/extendClasses';
import classes from './TabItem.module.scss';

const TabItem = forwardRef(function TI(
  { label, icon, active, onClick, ...props },
  ref
) {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <motion.button
      onClick={onClick}
      className={extendClasses(classes.TabItem, active ? classes.Active : '')}
      {...props}
      ref={ref}
      onMouseEnter={() => {
        cursorChangeHandler(true);
      }}
      onMouseLeave={() => cursorChangeHandler(false)}
    >
      {icon ? (
        <>
          <ion-icon name={icon}></ion-icon>
          <p>{label}</p>
        </>
      ) : (
        <p>{label}</p>
      )}
    </motion.button>
  );
});

export default TabItem;
