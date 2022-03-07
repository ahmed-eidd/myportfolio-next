import { motion } from 'framer-motion';
import React, { useState  } from 'react';
import WithDotCursor from '../../hoc/withDotCursor/WithDotCursor';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Button.module.scss';

const Button = ({ btnVariant, href, children, type = 'button' }) => {
  const [theme, setTheme] = useState(false);
  const onClick = () => {
    setTheme(!theme);
  };
  return (
    <>
      {type === 'button' && (
        <motion.button
          onClick={onClick}
          variants={btnVariant}
          className={extendClasses(classes.Button, theme && classes.theme)}
          whileHover={{
            transform: 'translateX(4px)',
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <p>{children}</p>
        </motion.button>
      )}
      {type === 'link' && (
        <motion.a
          onClick={onClick}
          target='_blank'
          variants={btnVariant}
          href={href}
          className={extendClasses(classes.Button, theme && classes.theme)}
          whileHover={{
            transform: 'translateX(4px)',
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <p>{children}</p>
        </motion.a>
      )}
    </>
  );
};

export default WithDotCursor(Button);
