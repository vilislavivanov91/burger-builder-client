import { CLEAR_AUTH, SET_AUTH, SET_ERROR } from '../actions/authActionTypes';

const initialState = {
  isAuth: false,
  email: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
        email: action.payload.email,
        error: null,
      };
    case CLEAR_AUTH:
      return {
        ...state,
        isAuth: false,
        email: null,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
