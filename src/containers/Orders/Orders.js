import React, { useState, useEffect } from 'react';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler';

const Orders = (props) => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    axios
      .get('/order/all')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let ingredientsDisplay = <Spinner />;
  if (orders) {
    ingredientsDisplay = orders.map((order, i) => (
      <Order key={i} ingredients={order.ingredients} price={order.price} />
    ));
  }

  return ingredientsDisplay;
};

export default withErrorHandler(Orders, axios);
