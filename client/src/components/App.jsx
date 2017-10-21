import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

export default class App extends Component {
  componentWillMount() {
    axios.post('/users')
      .then(({ data }) => data)
      .then(response => console.log(response));
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
