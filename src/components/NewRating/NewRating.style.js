import styled from 'styled-components';
import {
  primaryDarkColor,
  movieMargin,
  inputPaddingX,
  inputPaddingY,
  inputFontSize,
  baseTransitionTime,
} from '../../theme/variables';

export const NewRatingBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${movieMargin * 2}px;
`;

export const AddRatingButton = styled.button`
  margin-left: auto;
  padding: 10px 15px;
  color: ${primaryDarkColor};
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  outline: 0;
`;

export const NewRatingContent = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  height: ${props => (props.visible ? 400 : 0)}px;
  padding-top: ${props => (props.visible ? movieMargin * 2 : 0)}px;
  transition: all ${baseTransitionTime}ms;
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: ${inputPaddingY}px ${inputPaddingX}px;
  font-size: ${inputFontSize}px;
  background-color: #fff;
  border-radius: 4px;
  border: 0;
  outline: 0;
`;

export const NewRatingMovieList = styled.div`
  height: 340px;
  margin-top: ${movieMargin * 2}px;
  background-color: yellow;
`;
