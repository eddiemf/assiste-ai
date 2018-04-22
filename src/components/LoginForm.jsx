import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import FontIcon from 'material-ui/FontIcon';

const propTypes = {
  isAuthenticating: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
  authModalIsVisible: PropTypes.bool.isRequired,
  signUpFormIsVisible: PropTypes.bool.isRequired,
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

  componentDidMount() {
    if (this.emailInput) this.emailInput.focus();
  }

  componentDidUpdate(prevProps) {
    if (this.emailInput && (!prevProps.authModalIsVisible || prevProps.signUpFormIsVisible)) {
      // this.emailInput.focus();
      setTimeout(() => {
        this.emailInput.focus();
      }, 100);
    }
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
      <form className="base-form" onSubmit={this.handleSubmit}>
        {!this.props.isAuthenticating && !this.props.isAuthenticated && (
          <div className="login-form__control-group">
            <div className="base-form__control">
              <TextField
                ref={(input) => { this.emailInput = input; }}
                fullWidth
                name="email"
                placeholder="E-mail"
                onChange={this.handleChange}
              />
            </div>
            <div className="base-form__control">
              <TextField
                fullWidth
                type="password"
                name="password"
                placeholder="Senha"
                onChange={this.handleChange}
              />
            </div>
          </div>
        )}

        {this.props.isAuthenticating && (
          <div className="login-form__loader-container">
            <CircularProgress size={40} thickness={3} />
          </div>
        )}

        {this.props.isAuthenticated && (
          <div className="login-form__loader-container">
            <FontIcon><i className="material-icons md-48">check_circle</i></FontIcon>
          </div>
        )}

        <RaisedButton className="mr-4" label="Entrar" type="submit" />
        <RaisedButton label="Registrar-se" onClick={this.props.onRegisterClick} />
      </form>
    );
  }
}

LoginForm.propTypes = propTypes;

export default LoginForm;
