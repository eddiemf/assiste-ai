import React from 'react';
import { connect } from 'react-redux';
import auth from '../reducers/auth';
import { loginUserRequest, loginUserSuccess, loginUserFailure, login } from '../actions/auth';
import AuthModal from '../components/AuthModal';

const AuthModalContainer = props => <AuthModal {...props} />;

const mapStateToProps = state => ({
  auth: auth(state.auth),
});

const mapDispatchToProps = {
  loginUserRequest, loginUserSuccess, loginUserFailure, login,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModalContainer);
