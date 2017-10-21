const mongoose = require('mongoose');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const User = require('../models/user');
const factories = require('./factories');

mongoose.Promise = Promise;
chai.use(chaiAsPromised);
chai.should();

let validUser;

beforeEach(() => {
  validUser = factories.validUser();
});

describe('User model', () => {
  describe('Fields validation', () => {
    it('should not add a user without a name', () => {
      const newUser = new User({ name: '' });
      return newUser.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.name');
    });

    it('should not add a user without an email', () => {
      const newUser = new User({ email: '' });
      return newUser.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.email');
    });

    it('should not add a user without a password', () => {
      const newUser = new User({ password: '' });
      return newUser.validate()
        .should.be.rejected.and.eventually.have.nested.property('errors.password');
    });

    it('should not require a type when validating an user', () => {
      validUser.type = '';
      const newUser = new User(validUser);
      return newUser.validate().should.not.be.rejected;
    });
  });
});
