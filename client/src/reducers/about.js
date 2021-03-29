import { GET_ABOUT, FAIL_ABOUT } from '../actions/types';

const initState = {
  data: [],
  loading: true,
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ABOUT:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    default:
      return state;
  }
};
