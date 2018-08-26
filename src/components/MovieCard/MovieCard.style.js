import styled from 'styled-components';
import {
  movieMargin,
  baseTransitionTime,
  moviePosterHeight,
  expandedMovieHeight,
  containerWidth,
  movieDetailHeight,
  moviePosterBorderRadius,
  moviePadding,
} from '../../theme/variables';

export const MovieCardBase = styled.article`
  width: calc(20% - ${(movieMargin * 4) / 2}px);
  height: ${props => (props.expanded ? expandedMovieHeight : moviePosterHeight)}px;
  margin: ${movieMargin}px;
  transition: all ${baseTransitionTime}ms;
`;

export const PosterContainer = styled.div`
  height: ${moviePosterHeight}px;
  text-align: center;
  cursor: pointer;
`;

export const Poster = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${moviePadding}px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: ${moviePosterBorderRadius}px;
`;

export const Title = styled.h1`
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
`;

export const Details = styled.div`
  visibility: ${props => (props.expanded ? 'visible' : 'hidden')};
  opacity: ${props => (props.expanded ? 1 : 0)};
  position: absolute;
  left: ${moviePadding}px;
  width: ${containerWidth - moviePadding * 2}px;
  height: ${props => (props.expanded ? movieDetailHeight : 0)}px;
  margin-top: ${movieMargin / 2 + movieMargin}px;
  padding: ${moviePadding}px;
  background-color: rgba(0, 25, 255, 0.7);
  border-radius: ${moviePosterBorderRadius}px;
  transition: all ${baseTransitionTime}ms;
`;
