import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import defaultProfilePicture from '../images/profile.jpg';

const propTypes = {
  auth: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userPicture: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

const AppHeader = (props) => {
  const { userName, userPicture, isAuthenticated } = props.auth;

  return (
    <header className="app-header">
      <div className="app-header__main-bar">
        <div className="container">
          <div className="app-header__main-bar-inner">
            <div className="app-header__logo">
              <img src={logo} alt="Logotipo" />
            </div>

            <nav className="app-header__user-nav">
              {isAuthenticated && (
                <p>{userName} <button onClick={props.logout}>Logout</button></p>
              )}
              <div className="app-header__user-picture">
                <img src={userPicture || defaultProfilePicture} alt="Imagem do perfil" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

AppHeader.propTypes = propTypes;

export default AppHeader;
