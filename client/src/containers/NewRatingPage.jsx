/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppHeader from '../components/AppHeader';
import NewRatingForm from '../components/NewRatingForm';
// import { actions } from '../actions/reducer';

const propTypes = {
  prop: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

class NewRatingPage extends Component {
  render() {
    return (
      <Fragment>
        <AppHeader />
        <NewRatingForm />
      </Fragment>
    );
  }
}

NewRatingPage.propTypes = propTypes;

const mapStateToProps = state => ({
  prop: reducer(state.reducer),
});

export default withRouter(connect(mapStateToProps, {})(NewRatingPage));
