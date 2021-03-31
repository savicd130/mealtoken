import { GET_ITEM_MENU, FAIL_ITEM_MENU } from '../actions/types';

const initState = {
  loading: true,
  data: {},
};

export default (state = initState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_ITEM_MENU:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case FAIL_ITEM_MENU:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
