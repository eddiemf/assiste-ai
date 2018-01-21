import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../../components/AppHeader';
import AppHeaderUserNav from '../../components/AppHeaderUserNav';

describe('AppHeader component', () => {
  it('renders without crashing', () => {
    shallow(<AppHeader />);
  });

  it('renders the AppHeaderUserNav component', () => {
    const wrapper = shallow(<AppHeader />);
    expect(wrapper.containsAllMatchingElements([
      <AppHeaderUserNav />,
    ])).toEqual(true);
  });
});
