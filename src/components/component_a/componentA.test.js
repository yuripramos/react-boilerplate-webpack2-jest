import React from 'react';
import { shallow } from 'enzyme';

import ComponentA from './componentA.js';

const props = {
  lastname: "State 1",
};

describe('rendering tests', () => {
  it('rendering correctly', () => {
    const component = shallow(<ComponentA {...props} />);
    expect(component).toMatchSnapshot();
  });
});
