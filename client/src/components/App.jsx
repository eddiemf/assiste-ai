import React, { Component, Fragment } from 'react';
import AppHeaderContainer from '../containers/AppHeaderContainer';
import AuthModalContainer from '../containers/AuthModalContainer';

/* eslint-disable */
class App extends Component {
  render() {
    return (
      <Fragment>
        <AppHeaderContainer />
        <AuthModalContainer />
      </Fragment>
    );
  }
}

export default App;
