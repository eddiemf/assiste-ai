import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../components/Movie';

const propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const MoviesList = ({ movies, isLoading }) => {
  const loadingMessage = (
    <h1>Is loading...</h1>
  );

  return (
    <div className="container">
      <div className="movies-list">
        {isLoading && loadingMessage}
        {movies && movies.map(movie => (
          <Movie
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
          />
        ))}
      </div>
    </div>
  );
};

MoviesList.propTypes = propTypes;

export default MoviesList;
