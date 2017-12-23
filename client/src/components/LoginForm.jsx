import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  login: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="login-form__control">
          <input
            className="base-input base-input_full-width"
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={this.handleChange}
          />
        </div>
        <div className="login-form__control">
          <input
            className="base-input base-input_full-width"
            type="password"
            name="password"
            placeholder="Senha"
            onChange={this.handleChange}
          />
        </div>
        <input className="button" type="submit" value="Entrar" />
        <button
          className="button"
          type="button"
          onClick={this.props.onRegisterClick}
        >
          Registrar-se
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = propTypes;

export default LoginForm;
