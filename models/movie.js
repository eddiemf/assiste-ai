const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'The title field is required.'],
  },
  releaseDate: {
    type: Date,
    required: [true, 'The release date field is required.'],
  },
  overview: {
    type: String,
    required: [true, 'The overview field is required.'],
  },
  categories: {
    type: [String],
    required: [true, 'At least one category is required.'],
  },
  ratings: [],
  IMDBLink: {
    type: String,
    required: [true, 'The IMDB link field is required.'],
  },
  images: {
    poster: {
      type: String,
      required: [true, 'The poster image field is required.'],
    },
    thumbnail: {
      type: String,
      required: [true, 'The thumbnail image field is required.'],
    },
  },
});

module.exports = mongoose.model('movie', MovieSchema);
