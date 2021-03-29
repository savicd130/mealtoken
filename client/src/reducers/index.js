import { combineReducers } from 'redux';
import about from './about';
import auth from './auth';

export default combineReducers({
  auth,
  about,
});
