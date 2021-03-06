import React, { useContext } from 'react';
import classes from './DotCursor.module.scss';
import useMousePosition from '../../hooks/useMousePosition';
import { MouseContext } from '../../context/mouse-context';
import { useTablet } from '../../hooks/useMediaQuery';

const DotCursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  const tablet = useTablet();

  return (
    <>
      {!tablet && (
        <>
          <div
            style={{ left: `${x}px`, top: `${y}px` }}
            className={[classes.ring, cursorType && classes.ring_hovered].join(
              ' '
            )}
          ></div>
          <div
            className={[classes.dot, cursorType && classes.dot_hovered].join(
              ' '
            )}
            style={{ left: `${x}px`, top: `${y}px` }}
          ></div>
        </>
      )}
    </>
  );
};

export default DotCursor;
