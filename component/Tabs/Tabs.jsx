import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import classes from './Tabs.module.scss';
import TabItem from './TabItem/TabItem';
import TabContent from './TabContent/TabContent';

const Tabs = ({ children, tabsLabel = [] }) => {
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
      console.log(tabListRect);
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
    <motion.div className={classes.Tabs}>
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
      <TabContent index={currentTabIndex}>
        <h1>hi</h1>
        <h1>h2</h1>
        <h1>h3</h1>
      </TabContent>
    </motion.div>
  );
};

export default Tabs;

const Slider = ({ style, ...props }) => {
  return (
    <motion.div
      className={classes.Slider}
      positionTransition={{
        bounceStiffness: 100,
      }}
      initial={false}
      animate={style}
      {...props}
    ></motion.div>
  );
};
