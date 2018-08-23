import styled from 'styled-components';
import { primaryFontFamily } from './variables';
import bgImage from '../images/background-pattern.jpg';

const StyledApp = styled.div`
  min-height: 100vh;
  font-family: ${primaryFontFamily};
  line-height: 1.4;
  background-image: url(${bgImage});
`;

export default StyledApp;
