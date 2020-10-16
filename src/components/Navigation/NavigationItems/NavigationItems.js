import React from 'react';
import { connect } from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/">BurgerBuilder</NavigationItem>
      {props.isAuth && !props.isAdmin ? (
        <NavigationItem link="/orders">Orders</NavigationItem>
      ) : null}
      {!props.isAuth ? (
        <NavigationItem link="/auth">Auth</NavigationItem>
      ) : null}
      {props.isAdmin ? (
        <NavigationItem link="/admin-dashboard">Admin Dashboard</NavigationItem>
      ) : null}
      {props.isAuth ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
      ) : null}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isAdmin: state.auth.isAdmin,
});

export default connect(mapStateToProps)(navigationItems);
