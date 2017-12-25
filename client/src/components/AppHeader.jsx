/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import defaultProfilePicture from '../images/profile.jpg';

const propTypes = {
  userName: PropTypes.string.isRequired,
  userPicture: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

class AppHeader extends Component {
  render() {
    const { userName, userPicture, isAuthenticated } = this.props.auth;

    return (
      <header className="app-header">
        <div className="app-header__main-bar">
          <div className="container">
            <div className="app-header__main-bar-inner">
              <div className="app-header__logo">
                <img src={logo} alt="Logotipo" />
              </div>

              <nav className="app-header__user-nav">
                <p>{userName} <button onClick={this.props.logout}>Logout</button></p>
                <div className="app-header__user-picture">
                  <img src={userPicture || defaultProfilePicture} alt="Imagem do perfil"/>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

AppHeader.propTypes = propTypes;

export default AppHeader;
