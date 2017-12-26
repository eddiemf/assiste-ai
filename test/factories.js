exports.validUser = () => ({
  name: 'Eddie',
  type: 'user',
  email: 'eddie@test.com',
  password: '123123',
});

exports.validMovie = () => ({
  title: 'The Lord of the Rings: The Fellowship of the Ring',
  releaseDate: '2001',
  overview: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.',
  categories: ['Adventure', 'Drama', 'Fantasy'],
  ratings: [],
  IMDBLink: 'http://www.imdb.com.br/title/tt0120737/',
  images: {
    poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY999_CR0,0,673,999_AL_.jpg',
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzA4Y2Q4YTMtOTI5OC00NWMyLTk0NTUtODc1ZmQxOTY5MmU5XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
  },
});
