import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeScreen from '..';

const mockStore = configureStore([]);

test('renders correctly', () => {
    const initialState = { homeReducer: { error: null, loading: null, data: null, } };
    const store = mockStore(initialState);

    const element = renderer.create(
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    ).toJSON();
    expect(element).toMatchSnapshot();
});

// test('loading view', () => {
//     const initialState = { homeReducer: { error: null, loading: true, data: null, } };
//     const store = mockStore(initialState);
//     render(
//         <Provider store={store}>
//             <HomeScreen />
//         </Provider>
//     );
//     const element = screen.queryByTestId('loading-id');
//     expect(element).toBeTruthy();
// });