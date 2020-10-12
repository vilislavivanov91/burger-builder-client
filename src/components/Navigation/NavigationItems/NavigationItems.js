import React from 'react';
import { connect } from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/">BurgerBuilder</NavigationItem>
      {props.isAuth ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {!props.isAuth ? (
        <NavigationItem link="/auth">Auth</NavigationItem>
      ) : null}
      {props.isAuth ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
      ) : null}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(navigationItems);
