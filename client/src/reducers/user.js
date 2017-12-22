import * as types from '../constants/actionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        name: action.name,
        email: action.email,
        picture: action.picture,
      };
    default:
      return state;
  }
};

export default user;
