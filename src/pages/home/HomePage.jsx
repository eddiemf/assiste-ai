// @flow
import React, { Component, type Node } from 'react';
import { type Movie } from '../../types/Movie';
import { type ItemProps } from '../../components/ItemList/ItemList.types';
import Container from '../../theme/layout';
import { HomePageBase } from './HomePage.style';
import MovieCard from '../../components/MovieCard';
import NewRating from '../../components/NewRating';
import ItemList from '../../components/ItemList';
import {
  MovieCardContainer,
  MovieCardPlaceholder,
} from '../../components/MovieCard/MovieCard.style';

type State = {
  movies: Movie[],
};

class HomePage extends Component<{}, State> {
  state = {
    movies: [
      { id: 0, title: 'Test 1', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 1, title: 'Test 2', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 2, title: 'Test 3', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 3, title: 'Test 4', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 4, title: 'Test 4', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 5, title: 'Test 5', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 6, title: 'Test 6', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 7, title: 'Test 7', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 8, title: 'Test 8', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 9, title: 'Test 9', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 10, title: 'Test 10', posterPath: 'https://dummyimage.com/210x300/f00/000' },
      { id: 11, title: 'Test 11', posterPath: 'https://dummyimage.com/210x300/f00/000' },
    ],
  };

  renderMovieCard = ({
    item, selectedItemId, toggleItem, resetSelectedItem,
  }: ItemProps): Node => (
    <MovieCard
      key={item.id}
      id={item.id}
      isOpened={selectedItemId === item.id}
      title={item.title}
      toggleCard={toggleItem}
      closeCards={resetSelectedItem}
      posterSrc={item.posterPath}
    />
  );

  render() {
    const { movies } = this.state;

    return (
      <HomePageBase>
        <Container>
          <NewRating />

          <MovieCardContainer>
            <ItemList items={movies} renderItem={this.renderMovieCard} />
            <MovieCardPlaceholder />
            <MovieCardPlaceholder />
            <MovieCardPlaceholder />
            <MovieCardPlaceholder />
          </MovieCardContainer>
        </Container>
      </HomePageBase>
    );
  }
}

export default HomePage;
