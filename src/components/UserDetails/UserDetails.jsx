// @flow
import React from 'react';
import { ComponentBase, Avatar } from './UserDetails.style';
import defaultAvatar from '../../images/default-avatar.png';

const UserDetails = () => (
  <ComponentBase>
    <Avatar src={defaultAvatar} alt="User" />
  </ComponentBase>
);

export default UserDetails;
