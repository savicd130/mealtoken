import axios from 'axios';
import { GET_ABOUT, FAIL_ABOUT } from './types';

export const getAbout = () => async dispatch => {
  try {
    const res = await axios('http://localhost:5000/api/about');

    dispatch({
      type: GET_ABOUT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FAIL_ABOUT,
      payload: { message: err.message },
    });
  }
};
