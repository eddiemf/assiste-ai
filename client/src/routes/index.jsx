import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../containers/HomePage';

export default (
  <Switch>
    <Route path="/" exact component={HomePage} />
  </Switch>
);
