import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

const Movie = ({ title, overview }) => (
  <article className="movies-list__movie">
    <h1>{title}</h1>
    <p>{overview}</p>
  </article>
);

Movie.propTypes = propTypes;

export default Movie;
