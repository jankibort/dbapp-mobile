import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { ProfileScreen } from './ProfileScreen';

export type ProfileStackParams = {
  InsulinData: undefined;
  Profile: undefined;
  DataShare: undefined;
};

const ProfileStack = createNativeStackNavigator<ProfileStackParams>();

export const ProfileStackScreen: FC = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: true }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
};
