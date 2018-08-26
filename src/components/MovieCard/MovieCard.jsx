// @flow
import React from 'react';
import {
  MovieCardBase, Title, PosterContainer, Poster, Details,
} from './MovieCard.style';

type Props = {
  id: number,
  title: string,
  handleClick: () => void,
  isOpened: boolean,
  posterSrc: string,
};

const MovieCard = ({
  id, title, handleClick, isOpened, posterSrc,
}: Props) => (
  <MovieCardBase expanded={isOpened}>
    <PosterContainer>
      <Poster src={posterSrc} onClick={handleClick}>
        <Title>
          {title}
          {' '}
ID
          {id}
        </Title>
      </Poster>
    </PosterContainer>
    <Details expanded={isOpened}>{title}</Details>
  </MovieCardBase>
);

export default MovieCard;
