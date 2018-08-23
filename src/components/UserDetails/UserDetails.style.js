import styled from 'styled-components';

export const ComponentBase = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Avatar = styled.img`
  max-width: 50px;
  margin-left: auto;
  border-radius: 8px;
`;

export default {
  ComponentBase,
  Avatar,
};
