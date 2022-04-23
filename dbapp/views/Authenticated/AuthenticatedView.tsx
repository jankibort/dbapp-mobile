import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { HomeScreen } from './HomeScreen';

export type NonAuthStackParams = {
  HomeScreen: undefined;
};

const NonAuthStack = createNativeStackNavigator<NonAuthStackParams>();

export const AuthenticatedView: FC = () => {
  <NonAuthStack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{ headerShown: true }}
  >
    <NonAuthStack.Screen name="HomeScreen" component={HomeScreen} />
  </NonAuthStack.Navigator>;
  return <div>AuthenticatedView</div>;
};
