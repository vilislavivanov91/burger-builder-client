import React, { Fragment } from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const sideDrawer = (props) => {
  let classes = ['SideDrawer', 'Close'];

  if (props.displaySideDrawer) {
    classes = ['SideDrawer', 'Open'];
  }

  return (
    <Fragment>
      <Backdrop
        show={props.displaySideDrawer}
        onBackdropClicked={props.hideSideDrawer}
      />
      <div className={classes.join(' ')}>
        <div className="LogoSidedrawer">
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Fragment>
  );
};

export default sideDrawer;
