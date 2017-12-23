import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import auth from '../reducers/auth';
import { login } from '../actions/auth';

const LoginFormContainer = props => <LoginForm {...props} />;

const mapStateToProps = state => ({
  auth: auth(state.auth),
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
