import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusScreen } from './StatusScreen';
import { StyleSheet } from 'react-native';
import { Button } from '../../components';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { EntryScreen } from './EntryScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type AuthTabParams = {
  Status: undefined;
  Entry: undefined;
};

const Tab = createMaterialBottomTabNavigator<AuthTabParams>();

export const AuthenticatedView: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Status"
      activeColor={COLORS.LIGHT}
      barStyle={{ backgroundColor: COLORS.COMPONENT.NON_AUTH_BG }}
    >
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          tabBarLabel: 'My Status',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Entry"
        component={EntryScreen}
        options={{
          tabBarLabel: 'Add Record',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
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
