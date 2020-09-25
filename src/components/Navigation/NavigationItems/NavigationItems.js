import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" active>
        BurgerBuilder
      </NavigationItem>
      <NavigationItem link="/">Orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;
