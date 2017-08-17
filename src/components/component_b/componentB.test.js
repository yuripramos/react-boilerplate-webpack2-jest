import React from 'react';
import renderer from 'react-test-renderer';
import ComponentB from './ComponentB.js';

describe('rendering tests', () => {
	it('renders correctly', () => {
		const component = renderer.create(<ComponentB />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
