import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import  { Home }  from '../pages/Home';

const Stack = createStackNavigator();

export function AppRoutes(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />

    </Stack.Navigator>
  );
}
