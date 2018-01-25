import React from 'react';
import { shallow } from 'enzyme';
import merge from 'deepmerge';
import AuthModal from '../../components/AuthModal';

const openedClass = 'auth-modal_is-opened';
const hiddenFormSectionClass = 'auth-modal__form-section_is-hidden';
const visibleSignUpFormSectionClass = 'auth-modal__register-section_is-visible';
const login = jest.fn();
const register = jest.fn();
const hideAuthModal = jest.fn();
const showAuthModal = jest.fn();
const showSignUpForm = jest.fn();
const handleKeyDown = jest.fn();
const createComponent = (propsOverride = {}) => {
  const props = merge({
    auth: {
      isAuthenticated: false,
      isAuthenticating: false,
      authModalIsVisible: false,
      signUpFormIsVisible: false,
    },
    login,
    register,
    hideAuthModal,
    showAuthModal,
    showSignUpForm,
    handleKeyDown,
  }, propsOverride);

  return shallow(<AuthModal {...props} />);
};

let component;

describe('AuthModal component', () => {
  describe('when it is not visible', () => {
    beforeEach(() => {
      component = createComponent({
        auth: { authModalIsVisible: false },
      });
    });

    it('should not have the class to show it', () => {
      const modal = component.find('.auth-modal');
      expect(modal).not.toHaveClassName(openedClass);
    });
  });

  describe('when it is visible', () => {
    beforeEach(() => {
      component = createComponent({
        auth: { authModalIsVisible: true },
      });
    });

    it('should have the class to show it', () => {
      const modal = component.find('.auth-modal');
      expect(modal).toHaveClassName(openedClass);
    });

    it('should call the hideAuthModal method when the overlay is clicked', () => {
      const overlay = component.find('.auth-modal__overlay');
      overlay.simulate('click');
      expect(hideAuthModal).toHaveBeenCalled();
    });

    it('should call the hideAuthModal method when the escape key is pressed', () => {
      const modal = component.find('.auth-modal');
      modal.simulate('keydown', { keyCode: 27 });
      expect(hideAuthModal).toHaveBeenCalled();
    });

    it('should call the hideAuthModal method when clicking the skip login button', () => {
      const skipButton = component.find('.auth-modal__skip-login');
      skipButton.simulate('click');
      expect(hideAuthModal).toHaveBeenCalled();
    });
  });

  describe('when the login form section is visible', () => {
    beforeEach(() => {
      component = createComponent({
        auth: { signUpFormIsVisible: false },
      });
    });

    it('should show the login form section', () => {
      const loginFormSection = component.find('#login-form-section');
      expect(loginFormSection).not.toHaveClassName(hiddenFormSectionClass);
    });

    it('should hide the sign up form section', () => {
      const loginFormSection = component.find('#sign-up-form-section');
      expect(loginFormSection).not.toHaveClassName(visibleSignUpFormSectionClass);
    });
  });

  describe('when the sign up form section is visible', () => {
    beforeEach(() => {
      component = createComponent({
        auth: { signUpFormIsVisible: true },
      });
    });

    it('should hide the login form section', () => {
      const loginFormSection = component.find('#login-form-section');
      expect(loginFormSection).toHaveClassName(hiddenFormSectionClass);
    });

    it('should show the sign up form section', () => {
      const loginFormSection = component.find('#sign-up-form-section');
      expect(loginFormSection).toHaveClassName(visibleSignUpFormSectionClass);
    });
  });
});
