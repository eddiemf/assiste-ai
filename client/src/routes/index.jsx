import React from 'react';
import { Route } from 'react-router-dom';
import MoviesPage from '../containers/MoviesPage';
// import NewRatingPage from '../containers/NewRatingPage';

export default (
  <Route path="/" component={MoviesPage} />
);
