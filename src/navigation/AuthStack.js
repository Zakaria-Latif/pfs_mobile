import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LogInScreen} from "../screens/auth/LogInScreen"
import {SignUpScreen} from "../screens/auth/SignUpScreen"
import {OnBoardingScreen} from '../screens/auth/OnBoardingScreen'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;