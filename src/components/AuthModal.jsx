import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
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

const AuthModal = (props) => {
  const {
    authModalIsVisible,
    signUpFormIsVisible,
    isAuthenticating,
    isAuthenticated,
  } = props.auth;

  return (
    <div
      className={`auth-modal${authModalIsVisible ? ' auth-modal_is-opened' : ''}`}
      onKeyDown={e => e.keyCode === 27 && props.hideAuthModal()}
      role="button"
      tabIndex="0"
    >
      <div
        className="auth-modal__overlay"
        onClick={props.hideAuthModal}
        onKeyDown={e => e.keyCode === 27 && props.hideAuthModal()}
        role="button"
        tabIndex="0"
      />

      <div className="auth-modal__inner">
        <div className="auth-modal__header">
          <img src={logo} alt="Logotipo" />
        </div>

        <div id="login-form-section" className={`auth-modal__form-section${signUpFormIsVisible ? ' auth-modal__form-section_is-hidden' : ''}`}>
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
            login={props.login}
            onRegisterClick={props.showSignUpForm}
            authModalIsVisible={authModalIsVisible}
            signUpFormIsVisible={signUpFormIsVisible}
            isAuthenticating={isAuthenticating}
            isAuthenticated={isAuthenticated}
          />

          <div className="auth-modal__form-section-footer">
            <button className="auth-modal__skip-login" onClick={props.hideAuthModal}>
              Continuar sem fazer login
            </button>
          </div>
        </div>

        <div id="sign-up-form-section" className={`auth-modal__form-section auth-modal__register-section${signUpFormIsVisible ? ' auth-modal__register-section_is-visible' : ''}`}>
          <div className="auth-modal__form-section-header">
            <h1>Preencha os campos abaixo para realizar seu cadastro</h1>
          </div>
          <RegisterForm
            register={props.register}
            showAuthModal={props.showAuthModal}
            signUpFormIsVisible={signUpFormIsVisible}
          />
        </div>
      </div>
    </div>
  );
};

AuthModal.propTypes = propTypes;

export default AuthModal;
