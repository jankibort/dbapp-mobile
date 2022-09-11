import React from 'react';
import renderer from 'react-test-renderer';
import { SignUpScreen } from '../views';

test('renders correctly', () => {
  const tree = renderer.create(<SignUpScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
