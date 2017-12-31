import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const withAuth = (InnerComponent) => {
  const WithAuthComponent = props => <InnerComponent {...props} />;

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  return connect(mapStateToProps, {
    logout,
  })(WithAuthComponent);
};

export default withAuth;
