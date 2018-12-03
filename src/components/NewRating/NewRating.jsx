// @flow
import React, { Component } from 'react';
import Axios from 'axios';
import { type Movie } from '../../types/Movie';
import { type MovieResponse } from '../../types/MovieResponse';
import {
  NewRatingBase,
  AddRatingButton,
  NewRatingContent,
  SearchInput,
  NewRatingMovieList,
} from './NewRating.style';
import ItemList from '../ItemList';
import NewRatingCard from '../NewRatingCard/NewRatingCard';
import { NewRatingCardContainer } from '../NewRatingCard/NewRatingCard.style';

type State = {
  movies: Movie[],
  visibleMovies: Movie[],
  isExpanded: boolean,
  isFetching: boolean,
  searchQuery: string,
};

const sugestionMovies = [
  { id: 0, title: 'Sugestion 1', posterPath: 'https://dummyimage.com/210x300/f00/000' },
  { id: 1, title: 'Sugestion 2', posterPath: 'https://dummyimage.com/210x300/f00/000' },
  { id: 2, title: 'Sugestion 3', posterPath: 'https://dummyimage.com/210x300/f00/000' },
  { id: 3, title: 'Sugestion 4', posterPath: 'https://dummyimage.com/210x300/f00/000' },
  { id: 4, title: 'Sugestion 5', posterPath: 'https://dummyimage.com/210x300/f00/000' },
  { id: 5, title: 'Sugestion 6', posterPath: 'https://dummyimage.com/210x300/f00/000' },
  { id: 6, title: 'Sugestion 7', posterPath: 'https://dummyimage.com/210x300/f00/000' },
  { id: 7, title: 'Sugestion 8', posterPath: 'https://dummyimage.com/210x300/f00/000' },
  { id: 8, title: 'Sugestion 9', posterPath: 'https://dummyimage.com/210x300/f00/000' },
  { id: 9, title: 'Sugestion 10', posterPath: 'https://dummyimage.com/210x300/f00/000' },
];

class NewRating extends Component<{}, State> {
  state = {
    movies: [],
    visibleMovies: [],
    isFetching: false,
    isExpanded: false,
    searchQuery: '',
  };

  componentDidMount = () => {
    this.fetchSuggestedMovies()
      .then(response => response.data)
      .then((data: { results: MovieResponse[] }) => {

        // this.setState(() => ({
        //   movies: data.results.map((movie: MovieResponse) => ({
        //     id: movie.id,
        //     title: movie.title,
        //     poster_path: movie.poster_path,
        //     adult: movie.adult,
        //     backdrop_path: movie.backdrop_path,
        //     genres: movie.genres,
        //     imdb_id: movie.imdb_id,
        //     original_title: movie.original_title,
        //     overview: movie.overview,
        //     popularity: movie.popularity,
        //     release_date: movie.release_date,
        //     tagline: movie.tagline,
        //     vote_average: movie.vote_average,
        //     vote_count: movie.vote_count,
        //   }))
        //   visibleMovies: sugestionMovies.slice(0, 5), // 5 movies displayed at a time
        //   isFetching: false,
        // }));
      });
  }

  fetchSuggestedMovies = () => {
    this.setState(() => ({ isFetching: true }));

    const endpoint = 'https://api.themoviedb.org/3/discover/movie';
    const apiKey = '6dfe2e658289ce7acf0ad73ad8db8427';
    const language = 'pt-BR';
    const includeAdult = true;
    const releaseDateGTE = 'primary_release_date.gte=2014-09-15';
    const releaseDateLTE = 'primary_release_date.lte=2014-10-22';

    return Axios.get(endpoint, {
      params: {
        language,
        'primary_release_date.gte': releaseDateGTE,
        'primary_release_date.lte': releaseDateLTE,
        api_key: apiKey,
        include_adult: includeAdult,
      },
    });
  }

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

    return Axios.get(endpoint, {
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
      isExpanded, searchQuery, movies, isFetching, visibleMovies,
    } = this.state;

    return (
      <NewRatingBase>
        <AddRatingButton onClick={this.toggleForm}>Nova Indicacao</AddRatingButton>
        <NewRatingContent visible={isExpanded}>
          <SearchInput
            value={searchQuery}
            placeholder="Digite o nome do filme ou serie que deseja avaliar"
            onChange={this.handleSearchChange}
          />

          <NewRatingMovieList>
            <NewRatingCardContainer>
              <ItemList
                items={visibleMovies}
                renderItem={({ item }) => (
                  <NewRatingCard
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    isOpened={isExpanded}
                    toggleCard={() => {}}
                    posterSrc={item.posterPath}
                  />
                )}
              />
            </NewRatingCardContainer>
          </NewRatingMovieList>
        </NewRatingContent>
      </NewRatingBase>
    );
  }
}

export default NewRating;
