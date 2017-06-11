import React from 'react';
import { render } from 'enzyme';
import Header from './Header';

it('renders the AppBar component properly', () => {
  const wrapper = render(<Header />);
  expect(wrapper.text()).toContain('Weather Mate');
});
