import React from 'react';
import { connect } from 'react-redux';
import {
  showAuthModal,
  hideAuthModal,
  showSignUpForm,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  login,
  register,
  logout,
} from '../actions/auth';

const withAuth = (InnerComponent) => {
  const WithAuthComponent = props => <InnerComponent {...props} />;

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  return connect(mapStateToProps, {
    showAuthModal,
    hideAuthModal,
    showSignUpForm,
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    login,
    register,
    logout,
  })(WithAuthComponent);
};

export default withAuth;
