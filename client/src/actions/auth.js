import axios from 'axios';
import {
  REGISTRATION__SUCCESS,
  REGISTRATION__FAIL,
  LOGIN__SUCCESS,
  LOGIN__FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from './types';

import tokenAuth from '../utils/tokenAuth';

// Load user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    tokenAuth(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:5000/api/login');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = ({ email, password, token }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password, token });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/login',
      body,
      config
    );

    dispatch({
      type: LOGIN__SUCCESS,
      payload: res.data,
      accesstoken: token === 'pUMs7xZN4yxT' ? true : false,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN__FAIL,
    });
  }
};

export const register = ({
  name,
  email,
  password,
  token,
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ name, email, password, token });

  try {
    const res = await axios.post(
      'http://localhost:5000/api/users',
      body,
      config
    );

    dispatch({
      type: REGISTRATION__SUCCESS,
      payload: res.data,
      accesstoken: token === 'pUMs7xZN4yxT' ? true : false,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTRATION__FAIL,
    });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
