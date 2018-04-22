import { callApi } from '../utils';
import { SET_MOVIES } from '../constants/actionTypes';
import { ENDPOINTS } from '../constants/api';

export const setMovies = movies => ({ type: SET_MOVIES, payload: movies });

export const fetchMovies = () => dispatch => callApi(ENDPOINTS.movies)
  .then(({ data }) => data)
  .then((response) => {
    if (response.errors) {
      return console.log(response.errors);
    }

    const movies = response.data.map(movie => movie.attributes);
    return dispatch(setMovies(movies));
  })
  .catch(error => console.log(error));
