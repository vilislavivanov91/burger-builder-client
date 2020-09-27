import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/" render={BurgerBuilder}>
          <BurgerBuilder text="1" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
