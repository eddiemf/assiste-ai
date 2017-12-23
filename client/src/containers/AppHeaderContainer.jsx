import React from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/AppHeader';
import auth from '../reducers/auth';
import {
  login,
  loginUserRequest,
  loginUserFailure,
  loginUserSuccess,
  logout,
} from '../actions/auth';

const AppHeaderContainer = props => <AppHeader {...props} />;

const mapStateToProps = state => ({
  auth: auth(state.auth),
});

const mapDispatchToProps = {
  login,
  loginUserRequest,
  loginUserFailure,
  loginUserSuccess,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer);
