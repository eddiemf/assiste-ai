import React from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/AppHeader';
import { logout } from '../actions/auth';

const AppHeaderContainer = props => <AppHeader {...props} />;

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  logout,
})(AppHeaderContainer);
