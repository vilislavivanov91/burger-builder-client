import {
  ADD_ORDER,
  INIT_ORDERS,
  CLEAR_ORDERS,
} from '../actions/orderActionTypes';

const initialState = {
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ORDERS: {
      const updatedState = {
        ...state,
        orders: action.orders,
      };
      return updatedState;
    }
    case ADD_ORDER: {
      const updatedState = {
        orders: state.orders.concat(action.order),
      };
      return updatedState;
    }
    case CLEAR_ORDERS:
      return {
        orders: [],
      };
    default:
      return state;
  }
};

export default orderReducer;
