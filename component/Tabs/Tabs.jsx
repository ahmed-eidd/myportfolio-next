import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import classes from './Tabs.module.scss';
import TabItem from './TabItem/TabItem';
import TabContent from './TabContent/TabContent';
import { extendClasses } from '../../utilities/extendClasses';

const Tabs = ({ children, tabsLabel = [], className, maxWidth }) => {
  const [currentTabIndex, SetCurrentTabIndex] = useState(0);
  const [currentTab, SetCurrentTab] = useState(tabsLabel[0]?.label);
  const [animatedTabPos, setAnimatedTabPos] = useState({ left: 0, right: 0 });
  const tabRef = useRef(new Map());
  const tabItemsListRef = useRef(null);

  useEffect(() => {
    const targetedTab = tabRef?.current.get(currentTabIndex);
    const tabList = tabItemsListRef?.current;
    if (targetedTab) {
      const tabListRect = tabList.getBoundingClientRect();
      // console.log(tabListRect);
      if (tabListRect.width === 0) {
        return;
      }

      const tabRect = targetedTab?.getBoundingClientRect();
      let left = tabRect.left - tabListRect.left;
      let right = tabListRect.right - tabRect.right;

      setAnimatedTabPos({
        left,
        right,
      });
    }
  }, [currentTab]);

  return (
    <motion.div
      className={extendClasses(classes.Tabs, className)}
      style={{
        minWidth: `${tabsLabel.length * 11.5}rem`,
      }}
    >
      <div className={classes.Tabs__TabItemsList} ref={tabItemsListRef}>
        <Slider
          style={{
            left: animatedTabPos.left,
            right: animatedTabPos.right,
          }}
        />
        {tabsLabel.map(({ label, icon }, index) => (
          <TabItem
            active={label === currentTab}
            label={label}
            icon={icon}
            key={label}
            onClick={() => {
              SetCurrentTabIndex(index);
              SetCurrentTab(label);
            }}
            ref={(el) => tabRef.current.set(index, el)}
          />
        ))}
      </div>
      <TabContent index={currentTabIndex}>{children}</TabContent>
    </motion.div>
  );
};

export default Tabs;

const Slider = ({ style, ...props }) => {
  return (
    <motion.div
      className={classes.Slider}
      layout
      positionTransition={{
        bounceStiffness: 200,
      }}
      initial={false}
      animate={style}
      {...props}
    ></motion.div>
  );
};
