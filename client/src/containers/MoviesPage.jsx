import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import AppHeaderContainer from './AppHeaderContainer';
import MoviesListContainer from './MoviesListContainer';

const MoviesPage = () => (
  <Fragment>
    <AppHeaderContainer />
    <MoviesListContainer />
  </Fragment>
);

export default withRouter(MoviesPage);
