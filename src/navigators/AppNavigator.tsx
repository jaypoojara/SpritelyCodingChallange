import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ROUTES from './routes';
const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
