import React, { Component } from 'react';
import HomeView from './views/home/HomeView';
import Header from './components/Header';
import StyledApp from './theme/base';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header />
        <HomeView />
      </StyledApp>
    );
  }
}

export default App;
