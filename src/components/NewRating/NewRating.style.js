import styled from 'styled-components';
import {
  primaryDarkColor,
  movieMargin,
  moviePadding,
  inputPaddingX,
  inputPaddingY,
  inputFontSize,
  baseTransitionTime,
} from '../../theme/variables';

export const NewRatingBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${movieMargin}px;
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

export const FormContainer = styled.div`
  max-height: ${(props) => {
    if (!props.visible) return 0;

    if (props.showMovies) {
      return 500;
    }

    return 100;
  }}px;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? 1 : 0)};
  position: relative;
  ${''}
  transition: all ${baseTransitionTime}ms;
`;

export const Form = styled.form`
  padding: ${moviePadding}px;
  margin-top: ${movieMargin * 2}px;
  background-color: #ddd;
  border-radius: 4px;
  transition: all ${baseTransitionTime}ms;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: ${inputPaddingY}px ${inputPaddingX}px;
  font-size: ${inputFontSize}px;
  background-color: #fff;
  border-radius: 4px;
  border: 0;
  outline: 0;
`;
