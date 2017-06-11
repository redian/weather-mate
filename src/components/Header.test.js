import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders the AppBar component properly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
