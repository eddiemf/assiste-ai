import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import reducer from './reducers';
import { loginUserSuccess } from './actions/auth';
import './styles/app.scss';

const store = createStore(reducer, applyMiddleware(thunk));
const token = localStorage.getItem('token');

if (token !== null) {
  store.dispatch(loginUserSuccess(token));
}

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
