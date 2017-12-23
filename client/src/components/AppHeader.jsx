/* eslint-disable */
import React, { Component } from 'react';

class AppHeader extends Component {
  render() {
    console.log(this.props.auth);
    const { userName, isAuthenticated } = this.props.auth;
    const welcomeMessage = isAuthenticated ? `Welcome, ${userName}` : 'You are not logged in.';

    return (
      <header className="app-header">
        <div className="container">
          <h1>the header</h1>
          <h2>{welcomeMessage}</h2>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      </header>
    );
  }
}

export default AppHeader;
