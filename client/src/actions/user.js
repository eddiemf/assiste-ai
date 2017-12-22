import * as types from '../constants/actionTypes';

export const login = user => ({
  type: types.LOGIN,
  user,
});

export const logout = () => ({
  type: types.LOGOUT,
});
