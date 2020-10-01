import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import burgerReducer from './store/burgerReducer';

const store = createStore(burgerReducer);

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/" render={BurgerBuilder}>
            <BurgerBuilder />
          </Route>
        </Switch>
      </Layout>
    </Provider>
  );
}

export default App;
