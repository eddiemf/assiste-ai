import React from 'react';
import UserBar from '../components/UserBar';
import withAuth from '../hoc/withAuth';

const UserBarContainer = props => <UserBar {...props} />;

export default withAuth(UserBarContainer);
