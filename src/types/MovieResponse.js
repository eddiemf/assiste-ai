// @flow
type Genre = {
  id: number,
  name: string,
};

export type MovieResponse = {
  id: number,
  title: string,
  poster_path: string,
  adult: boolean,
  backdrop_path: string,
  genres: Genre[],
  imdb_id: string,
  original_title: string,
  overview: string,
  popularity: number,
  release_date: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
};
