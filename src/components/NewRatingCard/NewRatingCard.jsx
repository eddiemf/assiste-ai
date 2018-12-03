// @flow
import React from 'react';
import { NewRatingCardBase, Title } from './NewRatingCard.style';

type Props = {
  id: number,
  title: string,
  toggleCard: () => void,
  isOpened: boolean,
  posterSrc: string,
}

const NewRatingCard = ({ id, title, toggleCard, closeCards, isOpened, posterSrc }: Props) => {
  return (
    <NewRatingCardBase>
      <Title>{title}</Title>
    </NewRatingCardBase>
  );
};

export default NewRatingCard;
