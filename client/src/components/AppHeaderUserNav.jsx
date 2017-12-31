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
  showAuthModal: PropTypes.func.isRequired,
  showSignUpForm: PropTypes.func.isRequired,
};

const AppHeaderUserNav = (props) => {
  const { isAuthenticated, userName, userPicture } = props.auth;
  const avatarPicture = userPicture ?
    (<Avatar src={userPicture} title={userName} />) :
    (<Avatar title={userName}>{userName[0]}</Avatar>);

  return (
    <nav className="app-header__user-nav">
      {isAuthenticated && (
        <Fragment>
          <p>{userName}</p>
          <FlatButton primary label="Logout" onClick={props.logout} />
          <div className="app-header__user-picture">{avatarPicture}</div>
        </Fragment>
      )}

      {!isAuthenticated && (
        <Fragment>
          <FlatButton primary label="Fazer login" onClick={props.showAuthModal} />
          <RaisedButton className="ml-3" label="Registrar-se" onClick={props.showSignUpForm} />
        </Fragment>
      )}
    </nav>
  );
};

AppHeaderUserNav.propTypes = propTypes;

export default withAuth(AppHeaderUserNav);
