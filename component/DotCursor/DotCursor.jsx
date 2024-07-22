import React, { useContext } from 'react';
import classes from './DotCursor.module.scss';
import useMousePosition from '../../hooks/useMousePosition';
import { MouseContext } from '../../context/mouse-context';
import { useTablet } from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const DotCursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  const tablet = useTablet();

  return (
    <>
      {!tablet && (
        <>
          <motion.div
            // style={{ left: `${x}px`, top: `${y}px` }}
            animate={{
              left: x,
              top: y
            }}

            className={[classes.ring, cursorType && classes.ring_hovered].join(
              ' '
            )}
          ></motion.div>
          <motion.div
            className={[classes.dot, cursorType && classes.dot_hovered].join(
              ' '
            )}
            animate={{ left: x, top: y }}
          ></motion.div>
        </>
      )}
    </>
  );
};

export default DotCursor;
