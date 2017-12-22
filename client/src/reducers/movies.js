import * as types from '../constants/actionTypes';

const movies = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
        },
      ];
    default:
      return state;
  }
};

export default movies;
