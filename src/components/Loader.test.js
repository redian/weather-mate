import React from 'react';
import { render } from 'enzyme';
import Loader from './Loader';

it('renders the Loader component properly', () => {
  const wrapper = render(<Loader />);
  expect(wrapper.text()).toContain('Loading...');
});
