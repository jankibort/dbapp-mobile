import React from 'react';
import renderer from 'react-test-renderer';
import { EntryScreen } from '../views/Authenticated/EntryScreen/EntryScreen';

test('renders correctly', () => {
  const tree = renderer.create(<EntryScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
