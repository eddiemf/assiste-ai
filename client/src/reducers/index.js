import { combineReducers } from 'redux';
import user from './user';
import movies from './movies';

const assisteAi = combineReducers({
  user,
  movies,
});

export default assisteAi;
