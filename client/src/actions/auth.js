import { callApi } from '../utils';
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from '../constants/actionTypes';
import { ENDPOINTS } from '../constants/api';

export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });

export const loginUserSuccess = token => ({
  type: LOGIN_USER_SUCCESS,
  payload: { token },
});

export const loginUserFailure = () => ({ type: LOGIN_USER_FAILURE });

export const logout = () => ({ type: LOGOUT_USER });

export const login = (email, password) => dispatch => callApi(ENDPOINTS.login, {
  method: 'post',
  data: { email, password },
}).then(({ data }) => data)
  .then((response) => {
    if (response.errors) {
      return dispatch(loginUserFailure());
    }

    const { token } = response.data.attributes;

    return dispatch(loginUserSuccess(token));
  })
  .catch(() => dispatch(loginUserFailure()));
