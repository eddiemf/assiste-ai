// @flow
import React from 'react';
import StyledApp from './theme/base';
import HomePage from './pages/home';
import Header from './components/Header';

const App = () => (
  <StyledApp>
    <Header />
    <HomePage />
  </StyledApp>
);

export default App;
