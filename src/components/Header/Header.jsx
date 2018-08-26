// @flow
import React from 'react';
import { Logo, HeaderContainer } from './Header.style';
import logo from '../../images/logo.png';
import UserDetails from '../UserDetails';

const Header = () => (
  <HeaderContainer>
    <a href="#">
      <Logo src={logo} />
    </a>
    <UserDetails />
  </HeaderContainer>
);

export default Header;
