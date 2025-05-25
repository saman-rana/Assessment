import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={'Login'}>
      <Stack.Screen
        options={{headerShown: false}}
        name={'Login'}
        component={Login}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={'dashboard'}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
