import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import withAuth from '../hoc/withAuth';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import logo from '../images/logo-inverse.svg';

const propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  hideAuthModal: PropTypes.func.isRequired,
  showAuthModal: PropTypes.func.isRequired,
  showSignUpForm: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    authModalIsVisible: PropTypes.bool.isRequired,
    signUpFormIsVisible: PropTypes.bool.isRequired,
  }).isRequired,
};

class AuthModal extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    window.addEventListener('keydown', this.handleKeyDown);

    if (this.props.auth.isAuthenticated) {
      setTimeout(() => {
        this.props.hideAuthModal();
      }, 500);
    }
  }

  handleKeyDown(event) {
    if (event.keyCode !== 27) return;
    this.props.hideAuthModal();
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const {
      authModalIsVisible,
      signUpFormIsVisible,
      isAuthenticating,
      isAuthenticated,
    } = this.props.auth;

    return (
      <div className={`auth-modal${authModalIsVisible ? ' auth-modal_is-opened' : ''}`}>
        <div
          className="auth-modal__overlay"
          onClick={this.props.hideAuthModal}
          onKeyDown={this.handleKeyDown}
          role="button"
          tabIndex="0"
        />

        <div className="auth-modal__inner">
          <div className="auth-modal__header">
            <img src={logo} alt="Logotipo" />
          </div>

          <div className={`auth-modal__form-section${signUpFormIsVisible ? ' auth-modal__form-section_is-hidden' : ''}`}>
            <div className="auth-modal__form-section-header">
              <h1>Faça login pela sua plataforma favorita</h1>

              <div className="auth-modal__login-options">
                <FloatingActionButton
                  className="mx-2"
                  backgroundColor="#3b5998"
                  title="Fazer login usando o Facebook"
                >
                  <FontIcon className="fa fa-facebook" />
                </FloatingActionButton>
                <FloatingActionButton
                  className="mx-2"
                  backgroundColor="#ea4335"
                  title="Fazer login usando o Google"
                >
                  <FontIcon className="fa fa-google" />
                </FloatingActionButton>
                <FloatingActionButton
                  className="mx-2"
                  backgroundColor="#333"
                  title="Fazer login usando o Github"
                >
                  <FontIcon className="fa fa-github" />
                </FloatingActionButton>
              </div>

              <h1>ou usando sua conta do AssisteAí</h1>
            </div>

            <LoginForm
              login={this.props.login}
              onRegisterClick={this.props.showSignUpForm}
              authModalIsVisible={authModalIsVisible}
              signUpFormIsVisible={signUpFormIsVisible}
              isAuthenticating={isAuthenticating}
              isAuthenticated={isAuthenticated}
            />

            <div className="auth-modal__form-section-footer">
              <button className="auth-modal__skip-login" onClick={this.props.hideAuthModal}>
                Continuar sem fazer login
              </button>
            </div>
          </div>

          <div className={`auth-modal__form-section auth-modal__register-section${signUpFormIsVisible ? ' auth-modal__register-section_is-visible' : ''}`}>
            <div className="auth-modal__form-section-header">
              <h1>Preencha os campos abaixo para realizar seu cadastro</h1>
            </div>
            <RegisterForm
              register={this.props.register}
              showAuthModal={this.props.showAuthModal}
              signUpFormIsVisible={signUpFormIsVisible}
            />
          </div>
        </div>
      </div>
    );
  }
}

AuthModal.propTypes = propTypes;

export default withAuth(AuthModal);
