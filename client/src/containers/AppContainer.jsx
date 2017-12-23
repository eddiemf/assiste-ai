/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import auth from '../reducers/auth';

const AppContainer = props => <App {...props} />;

const mapStateToProps = state => ({
  auth: auth(state.auth),
});

export default connect(mapStateToProps)(AppContainer);
