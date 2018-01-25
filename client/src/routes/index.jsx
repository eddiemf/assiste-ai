import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import HomePage from '../pages/HomePage';
import AuthModalContainer from '../containers/AuthModalContainer';

export default (
  <Fragment>
    <AppHeader />
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
    <AuthModalContainer />
  </Fragment>
);
