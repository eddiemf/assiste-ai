// @flow
export type Movie = {
  id: number,
  title?: string,
  posterPath?: string,
  adult?: boolean,
  backdropPath?: string,
  genres?: [
    { id: number, name: string },
  ],
  imdbId?: string,
  originalTitle?: string,
  overview?: string,
  popularity?: number,
  releaseDate?: string,
  tagline?: string,
  voteAverage?: number,
  voteCount?: number,
};
