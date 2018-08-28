// @flow
import React, { Component } from 'react';
import Axios from 'axios';
import type { Movie } from '../../types/Movie';
import type { MovieResponse } from '../../types/MovieResponse';
import {
  NewRatingBase, AddRatingButton, Form, Input, FormContainer,
} from './NewRating.style';
import MovieCard from '../MovieCard';

type State = {
  movies: Movie[],
  isExpanded: boolean,
  isFetching: boolean,
  searchQuery: string,
};

class NewRating extends Component<{}, State> {
  state = {
    movies: [],
    isFetching: false,
    isExpanded: false,
    searchQuery: '',
  };

  toggleForm = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };

  closeForm = () => {
    this.setState(() => ({ isExpanded: false }));
  };

  handleSearchChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    this.setState(() => ({ searchQuery: value }));
    this.fetchMovies(value);
  };

  fetchMovies = (query: string) => {
    this.setState(() => ({ isFetching: true }));

    const endpoint = 'https://api.themoviedb.org/3/search/movie';
    const apiKey = '6dfe2e658289ce7acf0ad73ad8db8427';
    const language = 'pt-BR';
    const includeAdult = true;

    Axios.get(endpoint, {
      params: {
        language,
        query,
        api_key: apiKey,
        include_adult: includeAdult,
      },
    })
      .then(response => response.data)
      .then((data: { results: MovieResponse[] }) => {
        const { results } = data;
        const movies = results.map(
          (movie: MovieResponse): Movie => ({
            id: movie.id,
            title: movie.title,
            posterPath: movie.poster_path,
          }),
        );

        this.setState(() => ({ isFetching: false, movies }));
      });
  };

  render() {
    const {
      isExpanded, searchQuery, movies, isFetching,
    } = this.state;

    return (
      <NewRatingBase>
        <AddRatingButton onClick={this.toggleForm}>Nova Indicacao</AddRatingButton>
        <FormContainer visible={isExpanded} showMovies={movies.length > 0} isFetching={isFetching}>
          <Form action="">
            <Input
              value={searchQuery}
              placeholder="Digite o nome do filme ou serie que deseja avaliar"
              onChange={this.handleSearchChange}
            />
          </Form>
          {/* <MovieList
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
                posterSrc={movie.posterPath}
              />
            )}
          /> */}
        </FormContainer>
      </NewRatingBase>
    );
  }
}

export default NewRating;
