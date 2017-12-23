import { combineReducers } from 'redux';
import auth from './auth';
import movies from './movies';

const assisteAi = combineReducers({
  auth,
  movies,
});

export default assisteAi;
