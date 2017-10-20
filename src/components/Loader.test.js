import React from 'react';
import Loader from './Loader';

it('renders the Loader component properly', () => {
  const wrapper = render(<Loader loading="true"/>);
  expect(wrapper.text()).toContain('Loading you local weather');
});

it('should not render the Loader component when loading prop is not provided', () => {
  const wrapper = render(<Loader />);
  expect(wrapper.text()).not.toContain('Loading');
});
