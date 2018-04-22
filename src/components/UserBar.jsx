import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const propTypes = {
  auth: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userPicture: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
  showAuthModal: PropTypes.func.isRequired,
  showSignUpForm: PropTypes.func.isRequired,
};

const UserBar = (props) => {
  const { isAuthenticated, userName, userPicture } = props.auth;
  const avatarPicture = userPicture ?
    (<Avatar id="user-avatar" src={userPicture} title={userName} />) :
    (<Avatar id="user-letter-avatar" title={userName}>{userName.charAt(0)}</Avatar>);

  return (
    <nav className="app-header__user-nav">
      {isAuthenticated && (
        <Fragment>
          <p id="user-name">{userName}</p>
          <FlatButton id="logout-button" primary label="Logout" onClick={props.logout} />
          <div className="app-header__user-picture">{avatarPicture}</div>
        </Fragment>
      )}

      {!isAuthenticated && (
        <Fragment>
          <FlatButton
            id="login-button"
            primary
            label="Fazer login"
            onClick={props.showAuthModal}
          />
          <RaisedButton
            id="sign-up-button"
            className="ml-3"
            label="Registrar-se"
            onClick={props.showSignUpForm}
          />
        </Fragment>
      )}
    </nav>
  );
};

UserBar.propTypes = propTypes;

export default UserBar;
