import React, { FC } from 'react';
import 'react-native-gesture-handler';
import { StatusScreen } from './StatusScreen';
import { COLORS } from '../../constants';
import { EntryStackScreen } from './EntryScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ProfileStackScreen } from './ProfileScreen';

export type AuthTabParams = {
  Status: undefined;
  EntryStack: undefined;
  ProfileStack: undefined;
};

export const MainTabNavigation =
  createMaterialBottomTabNavigator<AuthTabParams>();

export const MainTabNavigator: FC = () => {
  return (
    <MainTabNavigation.Navigator
      initialRouteName="Status"
      activeColor={COLORS.LIGHT}
      barStyle={{ backgroundColor: COLORS.COMPONENT.NON_AUTH_BG }}
    >
      <MainTabNavigation.Screen
        name="Status"
        component={StatusScreen}
        options={{
          tabBarLabel: 'My Status',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <MainTabNavigation.Screen
        name="EntryStack"
        component={EntryStackScreen}
        options={{
          tabBarLabel: 'Add Record',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="heart-plus-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <MainTabNavigation.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="human-child"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </MainTabNavigation.Navigator>
  );
};
