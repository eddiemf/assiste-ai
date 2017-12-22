import { combineReducers } from 'redux';
import movies from './movies';

const assisteAi = combineReducers({
  movies,
});

export default assisteAi;
