import * as types from '../constants/actionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...action.user,
      };

    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default user;
