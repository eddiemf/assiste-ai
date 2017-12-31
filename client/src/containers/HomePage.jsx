import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import MoviesListContainer from './MoviesListContainer';

const HomePage = () => (
  <Fragment>
    <AppHeader />
    <MoviesListContainer />
  </Fragment>
);

export default withRouter(HomePage);
