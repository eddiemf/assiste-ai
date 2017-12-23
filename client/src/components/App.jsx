import React, { Component } from 'react';

/* eslint-disable */
class App extends Component {
  render() {
    const { auth } = this.props;
    console.log(auth);

    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
