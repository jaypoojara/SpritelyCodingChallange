import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import EmptyView from '../';

test('renders correctly', () => {
  const element = renderer.create(<EmptyView />).toJSON();
  expect(element).toMatchSnapshot();
});
