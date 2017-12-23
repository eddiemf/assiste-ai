import axios from 'axios';
import * as api from '../constants/api';

export const createReducer = (initialState, reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type];

  if (reducer) {
    return reducer(state, action.payload);
  }

  return state;
};

export const callApi = axios.create({
  baseURL: api.BASE_URL,
});
