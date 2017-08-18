import React from 'react';
import { shallow } from 'enzyme';

import ComponentB from './componentB.js';

const props = {
	lastname: "State 2",
};

describe('rendering tests', () => {
	it('rendering correctly', () => {
		const component = shallow(<ComponentB {...props} />);
		expect(component).toMatchSnapshot();
	});
});
