import React, { Fragment, useState } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import './Layout.css';

const Layout = (props) => {
  const [displaySideDrawer, setDisplaySideDrawer] = useState(false);

  const hideSideDrawer = () => {
    setDisplaySideDrawer(false);
  };

  const showSideDrawer = () => {
    setDisplaySideDrawer(true);
  };

  return (
    <Fragment>
      <Toolbar showSideDrawer={showSideDrawer} />
      <SideDrawer
        displaySideDrawer={displaySideDrawer}
        hideSideDrawer={hideSideDrawer}
      />
      <main className="Content">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
