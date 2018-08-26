// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './theme/index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Invalid root element.');
}

ReactDOM.render(<App />, rootElement);
registerServiceWorker();
