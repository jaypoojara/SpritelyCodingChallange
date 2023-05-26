import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';
import FeaturesItem from '..';
import { TYPE } from '../../../utils/enum';

test('renders correctly', () => {
  const element = renderer.create(<FeaturesItem name='' />).toJSON();
  expect(element).toMatchSnapshot();
});

test('should render the expected text: Noticeboard', async () => {
  render(<FeaturesItem name={TYPE.NOTICEBOARD} />);
  const find = await screen.findByText('Noticeboard');
  expect(find).toBeTruthy();
});

test('should render the expected text: Activities', async () => {
  render(<FeaturesItem name={TYPE.ACTIVITIES} />);
  const find = await screen.findByText('Activities');
  expect(find).toBeTruthy();
});

test('should render the expected text: Calendar', async () => {
  render(<FeaturesItem name={TYPE.CALENDAR} />);
  const find = await screen.findByText('Calendar');
  expect(find).toBeTruthy();
});

test('should render the expected text: Maintenance', async () => {
  render(<FeaturesItem name={TYPE.MAINTENANCE} />);
  const find = await screen.findByText('Maintenance');
  expect(find).toBeTruthy();
});

test('should render the expected text: Settings', async () => {
  render(<FeaturesItem name={TYPE.SETTINGS} />);
  const find = await screen.findByText('Settings');
  expect(find).toBeTruthy();
});

test('noticeboard icon render', async () => {
  render(<FeaturesItem name={TYPE.NOTICEBOARD} />);
  const element = screen.queryByTestId(TYPE.NOTICEBOARD);
  expect(element).toBeTruthy();
});

test('activities icon render', async () => {
  render(<FeaturesItem name={TYPE.ACTIVITIES} />);
  const element = screen.queryByTestId(TYPE.ACTIVITIES);
  expect(element).toBeTruthy();
});

test('calendar icon render', async () => {
  render(<FeaturesItem name={TYPE.CALENDAR} />);
  const element = screen.queryByTestId(TYPE.CALENDAR);
  expect(element).toBeTruthy();
});

test('maintenance icon render', async () => {
  render(<FeaturesItem name={TYPE.MAINTENANCE} />);
  const element = screen.queryByTestId(TYPE.MAINTENANCE);
  expect(element).toBeTruthy();
});

test('settings icon render', async () => {
  render(<FeaturesItem name={TYPE.SETTINGS} />);
  const element = screen.queryByTestId(TYPE.SETTINGS);
  expect(element).toBeTruthy();
});