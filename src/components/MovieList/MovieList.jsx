// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import type { Movie } from '../../types/Movie';
import { MovieListBase } from './MovieList.style';

type MovieListItemProps = {
  movie: Movie,
  openedMovieId: number | null,
  toggleMovie: () => void,
  key: number,
};

type Props = {
  movies: Movie[],
  renderMovie: (props: MovieListItemProps) => Node,
};

type State = {
  openedMovieId: number | null,
};

class MovieList extends Component<Props, State> {
  state = {
    openedMovieId: null,
  };

  toggleMovie = (movieId: number) => {
    const { movies } = this.props;
    const { openedMovieId } = this.state;
    const clickedMovie = movies.find((movie: Movie) => movie.id === movieId);

    if (!clickedMovie) {
      this.setState({ openedMovieId: null });

      return;
    }

    if (clickedMovie.id === openedMovieId) {
      this.setState({ openedMovieId: null });
    } else {
      this.setState({ openedMovieId: movieId });
    }
  };

  render() {
    const { movies, renderMovie } = this.props;
    const { openedMovieId } = this.state;
    const items = movies.map((movie: Movie) => renderMovie({
      key: movie.id,
      movie,
      openedMovieId,
      toggleMovie: () => this.toggleMovie(movie.id),
    }));

    return <MovieListBase>{items}</MovieListBase>;
  }
}

export default MovieList;
