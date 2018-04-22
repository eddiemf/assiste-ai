import jwt from 'jsonwebtoken';
import deepfreeze from 'deep-freeze';
import auth, { initialState } from '../../reducers/auth';
import * as actions from '../../actions/auth';

deepfreeze(initialState);

describe('Auth reducer', () => {
  it('should match the initial state', () => {
    expect(initialState).toMatchObject({
      token: null,
      userName: '',
      userPicture: '',
      isAuthenticated: false,
      isAuthenticating: false,
      statusText: '',
      authModalIsVisible: false,
      signUpFormIsVisible: false,
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

  it('should handle the auth modal opening', () => {
    const state = { ...initialState, authModalIsVisible: false };
    const action = actions.showAuthModal();

    deepfreeze(state);
    deepfreeze(action);

    expect(auth(state, action)).toMatchObject({
      ...state,
      authModalIsVisible: true,
    });
  });

  it('should handle the auth modal hiding', () => {
    const state = { ...initialState, authModalIsVisible: true };
    const action = actions.hideAuthModal();

    deepfreeze(state);
    deepfreeze(action);

    expect(auth(state, action)).toMatchObject({
      ...state,
      authModalIsVisible: false,
    });
  });

  it('should handle the auth modal opening in the signup form', () => {
    const state = { ...initialState, authModalIsVisible: false, signUpFormIsVisible: false };
    const action = actions.showSignUpForm();

    deepfreeze(state);
    deepfreeze(action);

    expect(auth(state, action)).toMatchObject({
      ...state,
      authModalIsVisible: true,
      signUpFormIsVisible: true,
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

  it('should set the user authentication token to the localStorage when logging in', () => {
    const payload = {
      userName: 'John',
      userPicture: 'https://www.google.com/',
    };
    const token = jwt.sign(payload, '123');
    const action = actions.loginUserSuccess(token);

    auth({}, action);

    expect(localStorage.setItem).toHaveBeenLastCalledWith('token', token);
    expect(localStorage.__STORE__.token).toBe(token);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });

  it('should handle the login failure', () => {
    const state = { ...initialState, token: 'Random token' };
    const action = actions.loginUserFailure({ details: 'The user login has failed.' });

    deepfreeze(state);
    deepfreeze(action);

    expect(auth(state, action)).toMatchObject({
      ...state,
      token: null,
      isAuthenticated: false,
      isAuthenticating: false,
      statusText: 'The user login has failed.',
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
      userName: '',
      userPicture: '',
      isAuthenticated: false,
      statusText: '',
    });
  });
});
