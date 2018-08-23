import React, { Component } from 'react';
import { Logo, HeaderContainer } from './Header.style';
import logo from '../../images/logo.png';
import UserDetails from '../UserDetails/UserDetails';

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <a href="#"><Logo src={logo} /></a>
        <UserDetails />
      </HeaderContainer>
    )
  }
}

