import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import withAuth from '../hoc/withAuth';

const propTypes = {
  auth: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userPicture: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

const AppHeaderUserNav = (props) => {
  const { isAuthenticated, userName, userAvatar } = props.auth;

  return (
    <nav className="app-header__user-nav">
      {isAuthenticated && (
        <Fragment>
          <p>{userName}</p>
          <FlatButton label="Logout" onClick={props.logout} />
          <div className="app-header__user-picture">
            <Avatar src={userAvatar} />
          </div>
        </Fragment>
      )}

      {!isAuthenticated && (
        <Fragment>
          <FlatButton primary label="Fazer login" />
          <RaisedButton className="ml-3" label="Registrar-se" />
        </Fragment>
      )}
    </nav>
  );
};

AppHeaderUserNav.propTypes = propTypes;

export default withAuth(AppHeaderUserNav);
