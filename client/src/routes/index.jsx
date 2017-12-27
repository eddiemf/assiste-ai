import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesPage from '../containers/MoviesPage';
import NewRatingPage from '../containers/NewRatingPage';

export default (
  <Switch>
    <Route path="/" exact component={MoviesPage} />
    <Route path="/nova-avaliacao" component={NewRatingPage} />
  </Switch>
);
