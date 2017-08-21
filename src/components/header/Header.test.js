import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header.js';

describe('rendering tests', () => {
  it('rendering correctly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
