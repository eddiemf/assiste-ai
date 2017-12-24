import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  register: PropTypes.func.isRequired,
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = this.state;
    this.props.register(name, email, password);
  }

  render() {
    return (
      <form className="base-form" onSubmit={this.handleSubmit}>
        <div className="base-form__control">
          <input
            className="base-input base-input_full-width"
            type="text"
            name="name"
            placeholder="Nome"
            onChange={this.handleChange}
          />
        </div>
        <div className="base-form__control">
          <input
            className="base-input base-input_full-width"
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={this.handleChange}
          />
        </div>
        <div className="base-form__control">
          <input
            className="base-input base-input_full-width"
            type="password"
            name="password"
            placeholder="Senha"
            onChange={this.handleChange}
          />
        </div>
        <input className="button" type="submit" value="Confirmar" />
      </form>
    );
  }
}

RegisterForm.propTypes = propTypes;

export default RegisterForm;
