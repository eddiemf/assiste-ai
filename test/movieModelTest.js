const mongoose = require('mongoose');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const Movie = require('../models/movie');
const factories = require('./factories');

mongoose.Promise = Promise;
chai.use(chaiAsPromised);
chai.should();

let validMovie;

beforeEach(() => {
  validMovie = factories.validMovie();
});

describe('Movie model', () => {
  describe('Fields validation', () => {
    it('should not add a movie without a title', () => {
      const newMovie = new Movie({ title: '' });
      return newMovie.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.title');
    });

    it('should not add a movie without a release date', () => {
      const newMovie = new Movie({ releaseDate: '' });
      return newMovie.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.releaseDate');
    });

    it('should not add a movie without an overview', () => {
      const newMovie = new Movie({ overview: '' });
      return newMovie.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.overview');
    });

    it('should not add a movie with no category', () => {
      const newMovie = new Movie({ categories: [] });
      return newMovie.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.categories');
    });

    it('should not add a movie without an IMDB link', () => {
      const newMovie = new Movie({ IMDBLink: '' });
      return newMovie.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.IMDBLink');
    });

    it('should not add a movie without a poster image', () => {
      const newMovie = new Movie({ images: { poster: '' } });
      return newMovie.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.images\\.thumbnail');
    });

    it('should not add a movie without a thumbnail image', () => {
      const newMovie = new Movie({ images: { thumbnail: '' } });
      return newMovie.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.images\\.thumbnail');
    });

    it('should not require ratings when validating a movie', () => {
      validMovie.ratings = [];
      const newMovie = new Movie(validMovie);
      return newMovie.validate().should.not.be.rejected;
    });
  });
});
