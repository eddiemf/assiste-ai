import styled from 'styled-components';
import { containerWidth, containerPadding } from './variables';

const Container = styled.div`
  width: ${containerWidth}px;
  max-width: 100%;
  padding-left: ${containerPadding}px;
  padding-right: ${containerPadding}px;
  margin-left: auto;
  margin-right: auto;
`;

export default Container;
