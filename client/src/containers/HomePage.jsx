import React from 'react';
import { withRouter } from 'react-router-dom';
import MoviesListContainer from './MoviesListContainer';

const HomePage = () => <MoviesListContainer />;

export default withRouter(HomePage);
