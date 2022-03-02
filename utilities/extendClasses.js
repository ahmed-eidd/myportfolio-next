export const extendClasses = (oldClass, ...moreClasses) => {
  return [oldClass, ...moreClasses].join(' ');
};
