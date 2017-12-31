import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const propTypes = {
  register: PropTypes.func.isRequired,
  showAuthModal: PropTypes.func.isRequired,
  signUpFormIsVisible: PropTypes.bool.isRequired,
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

  componentDidMount() {
    this.nameInput.focus();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.signUpFormIsVisible) {
      // this.nameInput.focus();
      setTimeout(() => {
        this.nameInput.focus();
      }, 100);
    }
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
          <TextField
            ref={(input) => { this.nameInput = input; }}
            fullWidth
            name="name"
            placeholder="Nome"
            onChange={this.handleChange}
          />
        </div>
        <div className="base-form__control">
          <TextField
            fullWidth
            type="email"
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
        <RaisedButton className="mr-4" type="submit" label="Confirmar" />
        <FlatButton label="Fazer login" onClick={this.props.showAuthModal} />
      </form>
    );
  }
}

RegisterForm.propTypes = propTypes;

export default RegisterForm;
