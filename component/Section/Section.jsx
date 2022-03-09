import React, { forwardRef } from 'react';

const Section = forwardRef(function sc({ children, ...props }, ref) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Section;
