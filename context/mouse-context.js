import React, { createContext, useEffect, useState } from 'react';

export const MouseContext = createContext({
  cursorType: false,
  cursorChangeHandler: () => {},
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState(false);
  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
    console.log('clicked');
  };
  // useEffect(() => {
  //   const mouseClickHandler = () => {
  //     setCursorType(true);
  //   };
  //   document.addEventListener('click', mouseClickHandler);

  //   return setCursorType(false);
  // }, []);

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
