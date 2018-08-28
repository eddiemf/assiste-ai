// @flow
import React from 'react';
import {
  MovieCardBase, Title, PosterContainer, Poster, Details,
} from './MovieCard.style';

type Props = {
  id: number,
  title: string,
  toggleCard: () => void,
  closeCards: () => void,
  isOpened: boolean,
  posterSrc: string,
};

const MovieCard = ({
  id, title, toggleCard, isOpened, closeCards, posterSrc,
}: Props) => (
  <MovieCardBase expanded={isOpened}>
    <PosterContainer>
      <Poster src={posterSrc} onClick={toggleCard}>
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
