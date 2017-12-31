import { callApi } from '../utils';
import {
  SHOW_AUTH_MODAL,
  HIDE_AUTH_MODAL,
  SHOW_SIGN_UP_FORM,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from '../constants/actionTypes';
import { ENDPOINTS } from '../constants/api';

export const showAuthModal = () => ({ type: SHOW_AUTH_MODAL });

export const hideAuthModal = () => ({ type: HIDE_AUTH_MODAL });

export const showSignUpForm = () => ({ type: SHOW_SIGN_UP_FORM });

export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });

export const loginUserSuccess = (token) => {
  localStorage.setItem('token', token);

  return {
    type: LOGIN_USER_SUCCESS,
    payload: { token },
  };
};

export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const logout = () => {
  localStorage.removeItem('token');
  return { type: LOGOUT_USER };
};

export const login = (email, password) => (dispatch) => {
  dispatch(loginUserRequest());

  callApi(ENDPOINTS.login, {
    method: 'post',
    data: { email, password },
  }).then(({ data }) => data)
    .then((response) => {
      if (response.errors) {
        return dispatch(loginUserFailure(response.errors));
      }

      const { token } = response.data.attributes;
      return dispatch(loginUserSuccess(token));
    })
    .catch(error => dispatch(loginUserFailure(error)));
};

export const register = (name, email, password) => dispatch => callApi(ENDPOINTS.users, {
  method: 'post',
  data: { name, email, password },
}).then(({ data }) => data)
  .then((response) => {
    if (response.errors) {
      return dispatch(loginUserFailure(response.errors));
    }

    const { token } = response.data.attributes;
    return dispatch(loginUserSuccess(token));
  })
  .catch(error => dispatch(loginUserFailure(error)));
