import React from 'react';
import { shallow } from 'enzyme';

import ComponentB from './ComponentB.js';

const props = {
	title: 'Page title',
	description: 'desc',
	image: 'image',
	children: {},
	location: {
		pathname: '/pathname',
	},
};

describe('rendering tests', () => {
	// it('renders correctly', () => {
	// 	const component = renderer.create(<ComponentB />);
	// 	const tree = component.toJSON();
	// 	expect(tree).toMatchSnapshot();
	// });
	it('rendering correctly', () => {
		const component = shallow(<ComponentB {...props} />);
		expect(component).toMatchSnapshot();
	});
});
