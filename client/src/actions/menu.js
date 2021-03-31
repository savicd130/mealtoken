import axios from 'axios';
import { GET_MENU, FAIL_MENU, GET_ITEM_MENU, FAIL_ITEM_MENU } from './types';

export const menuItems = typeParams => async dispatch => {
  const config = {
    params: {
      type: typeParams,
    },
  };

  try {
    const res = await axios.get('http://localhost:5000/api/menu', config);

    dispatch({
      type: GET_MENU,
      payload: res.data,
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: FAIL_MENU,
    });
  }
};

export const menuItem = id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:5000/api/menu/${id}`);

    dispatch({
      type: GET_ITEM_MENU,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: FAIL_ITEM_MENU,
    });
  }
};
