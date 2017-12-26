const mongoose = require('mongoose');

const Movie = mongoose.model('movie');

exports.index = (req, res) => {
  Movie.find()
    .then(movies => res.json({
      data: movies.map(movie => ({
        type: 'movie',
        attributes: movie,
      })),
    }));
};

exports.store = (req, res) => {
  const {
    title,
    releaseDate,
    overview,
    categories,
    ratings,
    IMDBLink,
    images,
  } = req.body;

  Movie.create({
    title,
    releaseDate,
    overview,
    categories,
    ratings,
    IMDBLink,
    images,
  })
    .then((movie) => {
      res.json({
        data: {
          type: 'movie',
          attributes: movie,
        },
      });
    })
    .catch((response) => {
      if (response.errors) {
        const errors = Object.keys(response.errors).map(key => response.errors[key]);

        res.json({
          errors: errors.map(error => ({
            title: error.message,
            details: error.message,
          })),
        });
        return;
      }

      res.status(500).json({
        errors: [{
          title: 'Something went wrong.',
          details: 'Something went wrong while trying to create a new movie. Try again later.',
        }],
      });
    });
};
