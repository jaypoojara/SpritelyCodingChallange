import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react-native';
import FeaturesItem from '../index';
import {TYPE} from '../../../utils/enum';

describe('<FeaturesItem />', () => {
  it('renders correctly', () => {
    const element = renderer.create(<FeaturesItem name="" />).toJSON();
    expect(element).toMatchSnapshot();
  });

  it('should render the expected text: Noticeboard', () => {
    render(<FeaturesItem name={TYPE.NOTICEBOARD} />);
    const find = screen.getByText('Noticeboard');
    expect(find).toBeTruthy();
  });

  it('should render the expected text: Activities', () => {
    render(<FeaturesItem name={TYPE.ACTIVITIES} />);
    const find = screen.getByText('Activities');
    expect(find).toBeTruthy();
  });

  it('should render the expected text: Calendar', () => {
    render(<FeaturesItem name={TYPE.CALENDAR} />);
    const find = screen.getByText('Calendar');
    expect(find).toBeTruthy();
  });

  it('should render the expected text: Maintenance', () => {
    render(<FeaturesItem name={TYPE.MAINTENANCE} />);
    const find = screen.getByText('Maintenance');
    expect(find).toBeTruthy();
  });

  it('should render the expected text: Settings', () => {
    render(<FeaturesItem name={TYPE.SETTINGS} />);
    const find = screen.getByText('Settings');
    expect(find).toBeTruthy();
  });

  it('noticeboard icon render', () => {
    render(<FeaturesItem name={TYPE.NOTICEBOARD} />);
    const element = screen.queryByTestId(TYPE.NOTICEBOARD);
    expect(element).toBeTruthy();
  });

  it('activities icon render', async () => {
    render(<FeaturesItem name={TYPE.ACTIVITIES} />);
    const element = screen.queryByTestId(TYPE.ACTIVITIES);
    expect(element).toBeTruthy();
  });

  it('calendar icon render', () => {
    render(<FeaturesItem name={TYPE.CALENDAR} />);
    const element = screen.getByTestId(TYPE.CALENDAR);
    expect(element).toBeTruthy();
  });

  it('maintenance icon render', () => {
    render(<FeaturesItem name={TYPE.MAINTENANCE} />);
    const element = screen.getByTestId(TYPE.MAINTENANCE);
    expect(element).toBeTruthy();
  });

  it('settings icon render', () => {
    render(<FeaturesItem name={TYPE.SETTINGS} />);
    const element = screen.getByTestId(TYPE.SETTINGS);
    expect(element).toBeTruthy();
  });
});
