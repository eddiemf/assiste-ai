import React, { Component } from 'react';
import { ComponentBase, Avatar } from './UserDetails.style';
import defaultAvatar from '../../images/default-avatar.png';

export default class UserDetails extends Component {
  render() {
    return (
      <ComponentBase>
        <Avatar src={defaultAvatar} alt="User" />
      </ComponentBase>
    );
  }
}
