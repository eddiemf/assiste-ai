import styled from 'styled-components';
import Container from '../../theme/layout';

export const HeaderContainer = Container.extend`
  display: flex;
  align-items: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Logo = styled.img`
  max-width: 500px;
`;

export default {
  Logo,
  HeaderContainer,
};
