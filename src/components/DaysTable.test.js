import React from 'react';
import DaysTable from './DaysTable';

it('should not render anything if list props is empty', () => {
  const list = [];
  const wrapper = render(<DaysTable list={list}/>);
  expect(wrapper.html()).toBe(null);
});

it('renders DaysTable component properly when list is provided', () => {
  const list = {
    '2017-06-15': [{
      hour: '12:00',
      temp: '23 ℃',
      icon: 'sun.png',
      description: 'Very Sunny',
    }]
  }
  const wrapper = render(<DaysTable list={list}/>);

  // As our list has only 1 day and 1 hour, there should be only 2 TD elements
  expect(wrapper.find('tbody td')).toHaveLength(2);
  // Transforming the date into utc format
  expect(wrapper.text()).toContain('Thu, 15 Jun');
});