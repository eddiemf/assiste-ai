import styled from 'styled-components';
import { containerPadding } from '../../theme/variables';

export const MovieListBase = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-left: ${-containerPadding}px;
  margin-right: ${-containerPadding}px;
`;

export default {
  MovieListBase,
};
