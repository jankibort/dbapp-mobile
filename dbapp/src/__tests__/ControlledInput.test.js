import React from 'react';
import renderer from 'react-test-renderer';
import { ControlledInput } from '../components/ControlledInput';

test('renders correctly', () => {
  const tree = renderer.create(<ControlledInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
