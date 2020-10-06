import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

it('renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});


