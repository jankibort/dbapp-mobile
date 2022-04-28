import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { createDrawerNavigator, DrawerView } from '@react-navigation/drawer';
import { MainTabNavigator } from './MainTabNavigator';

export type MainDrawerParams = {
  Main: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParams>();

export const AuthenticatedView: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Main" component={MainTabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  authViewWrapper: {},
  fixedButtonStyle: {
    position: 'absolute',
    color: COLORS.LIGHT,
    bottom: 12,
    right: 12,
    backgroundColor: 'red',
  },
  buttonLabel: {
    paddingVertical: 6,
  },
});
