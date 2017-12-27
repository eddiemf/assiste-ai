import { SET_MOVIES } from '../constants/actionTypes';
import { createReducer } from '../utils';

export default createReducer([], {
  [SET_MOVIES]: (state, payload) => payload.map(movie => ({
    ...state,
    id: movie._id,
    title: movie.title,
    overview: movie.overview,
    releaseDate: movie.releaseDate,
    categories: movie.categories,
    IMDBLink: movie.IMDBLink,
    images: movie.images,
  })),
});

