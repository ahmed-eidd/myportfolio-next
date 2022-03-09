import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { MouseContext } from '../../context/mouse-context';

import WithDotCursor from '../../hoc/withDotCursor/WithDotCursor';
import classes from './SectionLink.module.scss';

const SectionLink = ({ name, onClick, to }) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <motion.a onClick={onClick} className={classes.SectionLink}>
      <div className={classes.SectionLink__Name}>{name}</div>
      <div className={classes.SectionLink__Icon}>
        <ion-icon name='chevron-forward-circle-outline'></ion-icon>
      </div>
    </motion.a>
  );
};

export default WithDotCursor(SectionLink);
