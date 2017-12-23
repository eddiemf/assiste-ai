import jwt from 'jsonwebtoken';
import deepfreeze from 'deep-freeze';
import auth, { initialState } from './auth';
import * as actions from '../actions/auth';
import * as types from '../constants/actionTypes';

describe('Auth reducer', () => {
  it('should match the initial state', () => {
    expect(initialState).toMatchObject({
      token: null,
      userName: null,
      userPicture: null,
      isAuthenticated: false,
      isAuthenticating: false,
      statusText: null,
    });
  });

  it('should handle the login request', () => {
    const state = { ...initialState };
    const action = actions.loginUserRequest();

    deepfreeze(state);
    deepfreeze(action);

    expect(auth(state, action)).toMatchObject({
      ...state,
      isAuthenticating: true,
    });
  });

  it('should handle the user login', () => {
    const state = { ...initialState, isAuthenticating: true };
    const payload = {
      userName: 'John',
      userPicture: 'https://www.google.com/',
    };
    const token = jwt.sign(payload, '123');
    const action = actions.loginUserSuccess(token);

    deepfreeze(state);
    deepfreeze(action);

    expect(auth(state, action)).toMatchObject({
      ...state,
      token,
      userName: 'John',
      userPicture: 'https://www.google.com/',
      isAuthenticated: true,
      isAuthenticating: false,
      statusText: 'Autenticado com sucesso!',
    });
  });

  it('should handle the login failure', () => {
    const state = { ...initialState, token: 'Random token' };
    const action = actions.loginUserFailure();

    deepfreeze(state);
    deepfreeze(action);

    expect(auth(state, action)).toMatchObject({
      ...state,
      token: null,
      isAuthenticated: false,
      isAuthenticating: false,
      statusText: 'Erro ao autenticar.',
    });
  });

  it('should handle the user logout', () => {
    const state = {
      ...initialState,
      token: 'Random token',
      userName: 'John',
      userPicture: 'https://www.google.com/',
      isAuthenticated: true,
      statusText: 'Autenticado com sucesso!',
    };
    const action = actions.logout();

    deepfreeze(state);
    deepfreeze(action);

    expect(auth(state, action)).toMatchObject({
      ...state,
      token: null,
      userName: null,
      userPicture: null,
      isAuthenticated: false,
      statusText: null,
    });
  });
});
