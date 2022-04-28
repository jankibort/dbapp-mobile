import React, { FC } from 'react';
import 'react-native-gesture-handler';
import { StatusScreen } from './StatusScreen';
import { COLORS } from '../../constants';
import { EntryScreen } from './EntryScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { CalendarScreen } from './CalendarScreen';
import { ProfileStackScreen } from './ProfileScreen';

export type AuthTabParams = {
  Status: undefined;
  Entry: undefined;
  ProfileStack: undefined;
  Calendar: undefined;
};

const Tab = createMaterialBottomTabNavigator<AuthTabParams>();

export const MainTabNavigator: FC = () => {
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
            <MaterialCommunityIcons
              name="heart-plus-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          title: 'Profile',
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
    </Tab.Navigator>
  );
};
