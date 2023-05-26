import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoadingIndicator from '..';

test('renders correctly', () => {
  const element = renderer.create(<LoadingIndicator />).toJSON();
  expect(element).toMatchSnapshot();
});