import React from "react";
import renderer from 'react-test-renderer';
import Headers from '../index';
import { render, fireEvent, screen } from '@testing-library/react-native';

test('renders correctly', () => {
    const tree = renderer.create(<Headers />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('notification will be hide', () => {
    const onPressMock = jest.fn();
    render(<Headers notificationCount={0} onPressNotification={onPressMock} />);
    const element = screen.queryByTestId('notification-count-id');
    expect(element).toBeFalsy();
})

test('notification will be show', () => {
    const onPressMock = jest.fn();
    render(<Headers notificationCount={2} onPressNotification={onPressMock} />);
    const element = screen.queryByTestId('notification-count-id');
    expect(element).toBeTruthy();
})

test('notification press', () => {
    const mockOnPress = jest.fn();
    render(<Headers onPressNotification={mockOnPress} />);
    const element = screen.queryByTestId('notification-button-id');
    if (!element)
        return
    fireEvent.press(element);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
})