import React from 'react';
import withAuth from '../hoc/withAuth';
import AuthModal from '../components/AuthModal';

const AuthModalContainer = props => <AuthModal {...props} />;

export default withAuth(AuthModalContainer);
