import React from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/AppHeader';
import auth from '../reducers/auth';
import {
  logout,
} from '../actions/auth';

const AppHeaderContainer = props => <AppHeader {...props} />;

const mapStateToProps = state => ({
  auth: auth(state.auth),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderContainer);
