import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

import './App.css';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Authenticate from './containers/Authenticate/Authenticate';
import Logout from './containers/Logout/Logout';
import { setAuth, logout } from './actions/authActionCreator';

function App(props) {
  const checkLocalStorageForToken = () => {
    const tokenId = localStorage.getItem('tokenID');
    if (tokenId) {
      const { email, iat, exp, isAdmin } = jwtDecode(tokenId);
      const tokenDuration = (exp - iat) * 1000;
      props.setAuth(email, isAdmin);
      setTimeout(() => {
        props.logout();
      }, tokenDuration);
    }
  };
  checkLocalStorageForToken();
  return (
    <Layout>
      <Switch>
        <Route path="/checkout">
          {props.isAuth ? <Checkout /> : <Redirect to="/auth" />}
        </Route>
        <Route path="/orders">
          {props.isAuth ? <Orders /> : <Redirect to="/" />}
        </Route>
        (
        <Route path="/auth">
          {!props.isAuth ? <Authenticate /> : <Redirect to="/" />}
        </Route>
        <Route path="/logout">
          {props.isAuth ? <Logout /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          <BurgerBuilder />
        </Route>
      </Switch>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = (dispatch) => ({
  setAuth: (email, isAdmin) => dispatch(setAuth(email, isAdmin)),
  logout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
