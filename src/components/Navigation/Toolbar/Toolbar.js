import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import './Toolbar.css';

const toolbar = (props) => {
  return (
    <div className="Toolbar">
      <DrawerToggle onClick={props.showSideDrawer} />
      <Logo />
      <div className="DesktopOnly">
        <NavigationItems />
      </div>
    </div>
  );
};

export default toolbar;
