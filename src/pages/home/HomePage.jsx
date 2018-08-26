// @flow
import React, { Component } from 'react';
import type { Movie } from '../../types/Movie';
import Container from '../../theme/layout';
import MovieList from '../../components/MovieList';
import { HomePageBase } from './HomePage.style';
import MovieCard from '../../components/MovieCard';

type State = {
  movies: Movie[],
};

class HomePage extends Component<{}, State> {
  state = {
    movies: [
      { id: 0, title: 'Test 1' },
      { id: 1, title: 'Test 2' },
      { id: 2, title: 'Test 3' },
      { id: 3, title: 'Test 4' },
      { id: 4, title: 'Test 4' },
      { id: 5, title: 'Test 5' },
      { id: 6, title: 'Test 6' },
      { id: 7, title: 'Test 7' },
      { id: 8, title: 'Test 8' },
      { id: 9, title: 'Test 9' },
      { id: 10, title: 'Test 10' },
      { id: 11, title: 'Test 11' },
    ],
  };

  render() {
    const { movies } = this.state;

    return (
      <HomePageBase>
        <Container>
          <MovieList
            movies={movies}
            renderMovie={({
              movie, openedMovieId, toggleMovie, key,
            }) => (
              <MovieCard
                key={key}
                id={movie.id}
                isOpened={openedMovieId === movie.id}
                title={movie.title}
                handleClick={toggleMovie}
                posterSrc="https://dummyimage.com/210x300/f00/000"
              />
            )}
          />
        </Container>
      </HomePageBase>
    );
  }
}

export default HomePage;
