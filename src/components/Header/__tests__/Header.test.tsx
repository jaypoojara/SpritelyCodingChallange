import React from 'react';
import renderer from 'react-test-renderer';
import Headers from '../index';
import {render, fireEvent, screen} from '@testing-library/react-native';

describe('<Header />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Headers />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('will hide notifications if notification count is 0', () => {
    const onPressMock = jest.fn();
    render(<Headers notificationCount={0} onPressNotification={onPressMock} />);
    const element = screen.queryByTestId('notification-count-id');
    expect(element).toBeFalsy();
  });

  it('will render notifications', () => {
    const onPressMock = jest.fn();
    render(<Headers notificationCount={2} onPressNotification={onPressMock} />);
    const element = screen.getByTestId('notification-count-id');
    expect(element).toBeTruthy();
  });

  it('gives callback when notification icon is pressed', async () => {
    const mockOnPress = jest.fn();
    render(<Headers notificationCount={0} onPressNotification={mockOnPress} />);
    const element = screen.getByTestId('notification-button-id');
    fireEvent.press(element);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
