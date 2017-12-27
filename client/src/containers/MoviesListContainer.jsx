import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesList from '../components/MoviesList';
import { fetchMovies } from '../actions/movies';

const propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchMovies: PropTypes.func.isRequired,
};

class MoviesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.props.fetchMovies()
      .then(() => {
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log('An error ocured: ', error);
      });
  }

  render() {
    return (
      <MoviesList isLoading={this.state.loading} movies={this.props.movies} />
    );
  }
}

MoviesListContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(mapStateToProps, {
  fetchMovies,
})(MoviesListContainer);
