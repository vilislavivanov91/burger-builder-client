import axios from '../axios';

import { ADD_ORDER, INIT_ORDERS } from './orderActionTypes';

export const addOrder = (orderData) => {
  return {
    type: ADD_ORDER,
    order: orderData,
  };
};

export const initiateOrders = (orders) => {
  console.log(orders);
  return {
    type: INIT_ORDERS,
    orders,
  };
};

export const addOrderAsync = (orderData) => {
  return (dispatch) => {
    axios
      .post('/order', orderData)
      .then((response) => {
        return dispatch(addOrder(response.data));
      })
      .catch((err) => console.log(err));
  };
};

export const initiateOrdersAsync = () => {
  return (dispatch) => {
    axios
      .get('/order/all')
      .then((response) => {
        return dispatch(initiateOrders(response.data));
      })
      .catch((err) => console.log(err));
  };
};
