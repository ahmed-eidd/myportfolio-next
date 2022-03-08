import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import DotCursor from '../DotCursor/DotCursor';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Canvas from '../Particles/Particles';
import classes from './Layout.module.scss';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  console.log(loading);
  return (
    <motion.div>
      {/* {loading && <LoadingScreen />} */}
      <LoadingScreen show={loading} />
      {!loading && (
        <div style={{ zIndex: '100', width: '100%', height: '100%' }}>
          <div
            className={classes.Content}
            style={{ width: '100%', height: '100%' }}
          >
            {children}
          </div>
        </div>
      )}
      <DotCursor />
      <Canvas />
    </motion.div>
  );
};

export default Layout;
