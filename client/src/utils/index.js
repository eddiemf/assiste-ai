/* eslint-disable */
export const createReducer = (initialState, reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type];

  if (reducer) {
    return reducer(state, action.payload);
  }

  return state;
};
