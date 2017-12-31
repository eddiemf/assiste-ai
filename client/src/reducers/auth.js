import jwtDecode from 'jwt-decode';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SHOW_AUTH_MODAL,
  HIDE_AUTH_MODAL,
  SHOW_SIGN_UP_FORM,
} from '../constants/actionTypes';
import { createReducer } from '../utils';

export const initialState = {
  token: null,
  userName: '',
  userPicture: '',
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: '',
  showAuthModal: false,
  showSignUpForm: false,
};

export default createReducer(initialState, {
  [SHOW_AUTH_MODAL]: state => ({
    ...state,
    showAuthModal: true,
  }),

  [SHOW_SIGN_UP_FORM]: state => ({
    ...state,
    showAuthModal: true,
    showSignUpForm: true,
  }),

  [HIDE_AUTH_MODAL]: state => ({
    ...state,
    showAuthModal: false,
  }),

  [LOGIN_USER_REQUEST]: state => ({
    ...state,
    isAuthenticating: true,
    statusText: '',
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
    userName: '',
    userPicture: '',
    isAuthenticated: false,
    statusText: '',
  }),
});
