import React from 'react';
import { shallow } from 'enzyme';
import UserBar from '../../components/UserBar';

const validUserName = 'Eddie';
const validUserPicture = 'path/to/picture.jpg';
const logout = jest.fn();
const showAuthModal = jest.fn();
const showSignUpForm = jest.fn();
const createComponent = (props) => {
  const defaultProps = {
    auth: {
      userName: '',
      userPicture: '',
      isAuthenticated: false,
    },
    logout,
    showAuthModal,
    showSignUpForm,
  };

  return shallow(<UserBar {...defaultProps} {...props} />);
};

let component;

describe('UserBar component', () => {
  describe('when there is no user logged in', () => {
    beforeEach(() => {
      const auth = {
        userName: '',
        userPicture: '',
        isAuthenticated: false,
      };
      component = createComponent({ auth });
    });

    it('renders login and register buttons', () => {
      const loginButton = component.find({ id: 'login-button' });
      const signUpButton = component.find({ id: 'sign-up-button' });
      expect(loginButton.length).toBe(1);
      expect(signUpButton.length).toBe(1);
    });

    it('calls the showAuthModal method when clicking the login button', () => {
      const loginButton = component.find({ id: 'login-button' });
      loginButton.simulate('click');
      expect(showAuthModal).toHaveBeenCalled();
    });

    it('calls the showSignUpForm method when clicking the sign up button', () => {
      const signUpButton = component.find({ id: 'sign-up-button' });
      signUpButton.simulate('click');
      expect(showSignUpForm).toHaveBeenCalled();
    });
  });

  describe('when there is a valid user logged in', () => {
    beforeEach(() => {
      const auth = {
        userName: validUserName,
        userPicture: validUserPicture,
        isAuthenticated: true,
      };
      component = createComponent({ auth });
    });

    it('renders the received user name', () => {
      const userName = component.find({ id: 'user-name' });
      expect(userName).toBePresent();
      expect(userName).toHaveText(validUserName);
    });

    it('renders the user avatar with the user name as title if a valid picture is passed', () => {
      const userAvatar = component.find({ id: 'user-avatar' });
      expect(userAvatar).toBePresent();
      expect(userAvatar).toHaveProp('src', validUserPicture);
      expect(userAvatar).toHaveProp('title', validUserName);
    });

    it('renders the user letter avatar with the user name as title if no picture is passed', () => {
      const auth = { userName: validUserName, userPicture: '', isAuthenticated: true };
      component = createComponent({ auth });
      const userAvatar = component.find({ id: 'user-letter-avatar' });
      expect(userAvatar).toBePresent();
      expect(userAvatar.children()).toHaveText(validUserName.charAt(0));
      expect(userAvatar).toHaveProp('title', validUserName);
    });

    it('renders a logout button', () => {
      const logoutButton = component.find({ id: 'logout-button' });
      expect(logoutButton.length).toBe(1);
    });

    it('calls the logout method when clicking the logout button', () => {
      const logoutButton = component.find({ id: 'logout-button' });
      logoutButton.simulate('click');
      expect(logout).toHaveBeenCalled();
    });
  });
});
