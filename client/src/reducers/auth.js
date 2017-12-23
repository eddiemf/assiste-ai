import jwtDecode from 'jwt-decode';
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from '../constants/actionTypes';
import { createReducer } from '../utils';

export const initialState = {
  token: null,
  userName: null,
  userPicture: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
};

export default createReducer(initialState, {
  [LOGIN_USER_REQUEST]: state => ({
    ...state,
    isAuthenticating: true,
    statusText: null,
  }),

  [LOGIN_USER_SUCCESS]: (state, payload) => ({
    ...state,
    token: payload.token,
    userName: jwtDecode(payload.token).userName,
    userPicture: jwtDecode(payload.token).userPicture,
    isAuthenticated: true,
    isAuthenticating: false,
    statusText: 'Autenticado com sucesso!',
  }),

  [LOGIN_USER_FAILURE]: (state, payload) => ({
    ...state,
    token: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: payload.details || 'Algo deu errado ao tentar fazer login.',
  }),

  [LOGOUT_USER]: state => ({
    ...state,
    token: null,
    userName: null,
    userPicture: null,
    isAuthenticated: false,
    statusText: null,
  }),
});
