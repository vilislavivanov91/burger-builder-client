import jwtDecode from 'jwt-decode';

import {
  CLEAR_AUTH,
  SET_AUTH,
  SET_ERROR,
  CLEAR_LOADING,
  SET_LOADING,
} from './authActionTypes';
import axios from '../axios';
let logoutSetTimeoutId;

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const clearLoading = () => {
  return {
    type: CLEAR_LOADING,
  };
};

export const setAuth = (email) => {
  return {
    type: SET_AUTH,
    payload: {
      isAuth: email ? true : false,
      email: email,
    },
  };
};

export const logout = () => {
  clearTimeout(logoutSetTimeoutId);
  clearTokenFromLocalStorage();
  return {
    type: CLEAR_AUTH,
  };
};

export const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: {
      error: err,
    },
  };
};

export const register = ({ email, password, confirmPassword }) => {
  return (dispatch) => {
    dispatch(setLoading());
    axios
      .post('/auth/register', { email, password, confirmPassword })
      .then((response) => {
        const token = response.data.token.split(' ')[1];
        const decoded = jwtDecode(token);
        addTokenToLocalStorage(token);
        dispatch(setAuth(decoded.email));
        dispatch(clearLoading());
      })
      .catch((err) => {
        dispatch(clearLoading());
        dispatch(setError(err));
      });
  };
};

export const login = ({ email, password }) => {
  return (dispatch) => {
    dispatch(setLoading());
    axios
      .post('/auth/login', { email, password })
      .then((response) => {
        const token = response.data.token.split(' ')[1];
        const decoded = jwtDecode(token);
        addTokenToLocalStorage(token);
        dispatch(setAuth(decoded.email));
        dispatch(clearLoading());
      })
      .catch((err) => {
        dispatch(clearLoading());
        dispatch(setError(err));
      });
  };
};

const addTokenToLocalStorage = (token) => {
  localStorage.setItem('tokenID', token);
  const { iat, exp } = jwtDecode(token);
  const tokenDuration = (exp - iat) * 1000;
  logoutSetTimeoutId = setTimeout(() => {
    clearTokenFromLocalStorage();
  }, tokenDuration);
};

const clearTokenFromLocalStorage = () => {
  localStorage.removeItem('tokenID');
};
