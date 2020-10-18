import axios from '../axios';

import {
  ADD_ORDER,
  SET_OREDERS,
  CLEAR_ORDERS,
  SET_ERROR,
  START_LOADING,
  FINISH_LOADING,
  DELETE_ORDER,
} from './orderActionTypes';

export const addOrder = (orderData) => {
  return {
    type: ADD_ORDER,
    order: orderData,
  };
};

export const setOrders = (orders) => {
  return {
    type: SET_OREDERS,
    orders,
  };
};

export const addOrderAsync = (orderData) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .post('/order', orderData)
      .then((response) => {
        dispatch(addOrder(response.data));
        dispatch(finishLoading());
      })
      .catch((err) => console.log(err));
  };
};

export const initiateOrdersAsync = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get('/order/user/all')
      .then((response) => {
        dispatch(setOrders(response.data));
        dispatch(finishLoading());
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const initiateAdminOrdersAsync = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .get('/order/all')
      .then((response) => {
        dispatch(setOrders(response.data));
        dispatch(finishLoading());
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const changeOrderStageAsync = (orderId, stage) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .post('/order/' + orderId, { stage })
      .then((response) => {
        axios
          .get('/order/all')
          .then((response) => {
            dispatch(setOrders(response.data));
            dispatch(finishLoading());
          })
          .catch((err) => dispatch(setError(err)));
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const deleteOrderAsync = (orderId, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios
      .delete('/order/' + orderId)
      .then((response) => {
        dispatch(deleteOrder(orderId));
        dispatch(finishLoading());
        history.push('/admin-dashboard');
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const deleteOrder = (orderId) => ({
  type: DELETE_ORDER,
  payload: orderId,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});

export const clearOrders = () => ({
  type: CLEAR_ORDERS,
});
