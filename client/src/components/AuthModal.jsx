import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import logo from '../images/logo-inverse.svg';

const propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
};

class AuthModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isInSignUp: false,
    };

    this.hide = this.hide.bind(this);
    this.switchToRegister = this.switchToRegister.bind(this);
  }

  componentWillMount() {
    this.setState({ show: !this.props.auth.isAuthenticated });
  }

  hide(event) {
    if (event.KeyCode !== 27) return;
    this.setState({ show: false });
  }

  switchToRegister() {
    this.setState({ isInSignUp: true });
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { isInSignUp } = this.state;
    let { show } = this.state;
    if (isAuthenticated) show = false;

    return (
      <div className={`auth-modal${show ? ' auth-modal_is-opened' : ''}`}>
        <div
          className="auth-modal__overlay"
          onClick={this.hide}
          onKeyDown={this.hide}
          role="button"
          tabIndex="0"
        />

        <div className="auth-modal__inner">
          <div className="auth-modal__header">
            <img src={logo} alt="Logotipo" />
          </div>

          <div className="auth-modal__login-section">
            <div className="auth-modal__login-section-header">
              <h1>Faça login pela sua plataforma favorita</h1>

              <div className="auth-modal__login-options">
                <button className="button">Facebook</button>
                <button className="button">Gmail</button>
                <button className="button">Github</button>
              </div>

              <h1>ou usando sua conta do AssisteAí</h1>
            </div>

            <LoginForm login={this.props.login} onRegisterClick={this.switchToRegister} />

            <div className="auth-modal__login-footer">
              <button className="auth-modal__skip-login">Continuar sem fazer login</button>
            </div>
          </div>

          <div className={`auth-modal__register-section${isInSignUp ? ' auth-modal__is-visible' : ''}`}>
            Register form
          </div>
        </div>
      </div>
    );
  }
}

AuthModal.propTypes = propTypes;

export default AuthModal;
