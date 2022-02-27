import React from 'react';
import DotCursor from '../DotCursor/DotCursor';
import Canvas from '../Particles/Particles';

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ zIndex: '100', width: '100%', height: '100%' }}>
        <div style={{ width: '100%', height: '100%' }}>{children}</div>
      </div>
      <DotCursor />
      <Canvas />
    </>
  );
};

export default Layout;
