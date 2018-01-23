import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../../components/AppHeader';
import UserBarContainer from '../../containers/UserBarContainer';

describe('AppHeader component', () => {
  it('renders without crashing', () => {
    shallow(<AppHeader />);
  });

  it('renders the UserBarContainer component', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.containsAllMatchingElements([
      <UserBarContainer />,
    ])).toEqual(true);
  });
});
