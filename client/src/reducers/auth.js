import {
  LOGIN__SUCCESS,
  LOGIN__FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from '../actions/types';

const initState = {
  token: localStorage.getItem('token'),
  highaccess: false,
  isAuth: false,
  loading: true,
  user: null,
};

export default (state = initState, actions) => {
  const { type, payload, accesstoken } = actions;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        highaccess: +localStorage.getItem('highaccess', payload.highaccess)
          ? true
          : false,
        isAuth: true,
        loading: false,
      };

    case LOGIN__SUCCESS:
      localStorage.setItem('token', payload.token);
      localStorage.setItem('highaccess', payload.highaccess ? 1 : 0);
      return {
        ...state,
        highaccess: accesstoken,
        isAuth: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGIN__FAIL:
    case LOGOUT: {
      localStorage.removeItem('token');
      localStorage.removeItem('highaccess');
      return {
        ...state,
        highaccess: false,
        isAuth: false,
        loading: false,
      };
    }
    default:
      return state;
  }
};
