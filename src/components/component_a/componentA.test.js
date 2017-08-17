import React from 'react';
import renderer from 'react-test-renderer';

import ComponentA from './ComponentA.js';

describe('rendering tests', () => {
	it('renders correctly', () => {
		const component = renderer.create(<ComponentA />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
