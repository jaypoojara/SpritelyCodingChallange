import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeScreen from '..';
import {HomeScreenData} from '../../../types/redux/homeSlice';

const mockStore = configureStore([]);

const mockData: HomeScreenData = {
  firstName: 'Gloria',
  weatherHigh: 18,
  weatherLow: 3,
  notficationCount: 3,
  features: [
    'noticeboard',
    'activities',
    'calendar',
    'maintenance',
    'settings',
  ],
};

describe('<HomeScreen />', () => {
  let store;
  let component: any;
  beforeEach(() => {
    store = mockStore({
      homeReducer: {
        loading: false,
        error: null,
        data: mockData,
      },
    });
    store.dispatch = jest.fn();
    component = (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  });
  it('renders home screen correctly', () => {
    const element = render(component);
    expect(element).toMatchSnapshot();
  });
  it('render loader when loading is true', () => {
    store = mockStore({
      homeReducer: {
        loading: true,
        error: null,
        data: null,
      },
    });
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );
    expect(screen.getByTestId('activity-loader-id')).toBeTruthy();
  });
  it('renders data when loading is false and data is provided', () => {
    render(component);
    expect(screen.queryByTestId('activity-loader-id')).toBeFalsy();
    expect(screen.getByText('Calendar')).toBeTruthy();
    expect(screen.getByText('Activities')).toBeTruthy();
    expect(screen.getByText('Noticeboard')).toBeTruthy();
    expect(screen.getByText('Maintenance')).toBeTruthy();
    expect(screen.getByText('Settings')).toBeTruthy();
  });
});
