import React, { Component } from 'react';

class NewRatingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      commentField: '',
      rateField: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="new-rating-container">
        <form className="new-rating-form" onSubmit={this.onSubmitHandler}>
          <div className="base-form__control">
            <input
              type="text"
              value={this.state.searchField}
              name="searchField"
              placeholder="Filme"
              className="base-input base-input_full-width"
              onChange={this.onChangeHandler}
            />
          </div>

          <div className="base-form__control">
            <textarea
              type="text"
              value={this.state.commentField}
              name="commentField"
              placeholder="Avaliação"
              className="base-input base-input_full-width"
              onChange={this.onChangeHandler}
            />
          </div>

          <div className="base-form__control">
            <select
              className="base-input base-input_full-width"
              name="rateField"
              value={this.state.rateField}
              onChange={this.onChangeHandler}
            >
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
              <option value="0">0</option>
            </select>
          </div>

          <button className="button" type="submit">Submeter</button>
        </form>
      </div>
    );
  }
}

export default NewRatingForm;
