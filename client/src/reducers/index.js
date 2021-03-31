import { combineReducers } from 'redux';
import about from './about';
import auth from './auth';
import menu from './menu';
import item from './item';

export default combineReducers({
  auth,
  about,
  menu,
  item,
});
