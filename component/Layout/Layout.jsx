import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import DotCursor from '../DotCursor/DotCursor';
import Canvas from '../Particles/Particles';

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div>
      <div style={{ zIndex: '100', width: '100%', height: '100%' }}>
        <div style={{ width: '100%', height: '100%' }}>{children}</div>
      </div>
      <DotCursor />
      <Canvas />
    </motion.div>
  );
};

export default Layout;
