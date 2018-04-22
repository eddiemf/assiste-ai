import React from 'react';
import logo from '../images/logo.svg';
import background from '../images/header-bg.jpg';
import UserBarContainer from '../containers/UserBarContainer';

const AppHeader = () => (
  <header className="app-header" style={{ backgroundImage: `url(${background})` }}>
    <div className="app-header__main-bar">
      <div className="container">
        <div className="app-header__main-bar-inner">
          <div className="app-header__logo">
            <img src={logo} alt="Logotipo" />
          </div>

          <UserBarContainer />
        </div>
      </div>
    </div>
  </header>
);

export default AppHeader;
