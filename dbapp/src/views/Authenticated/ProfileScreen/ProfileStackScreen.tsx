import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { ProfileScreen } from './ProfileScreen';

export type ProfileStackParams = {
  InsulinData: undefined;
  Profile: undefined;
  DataShare: undefined;
};

const ProfileStack = createNativeStackNavigator<ProfileStackParams>();

/**
 *
 * @returns stack component which is wrapper to create nested stack navigation insinde tab nav
 */
export const ProfileStackScreen: FC = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
};
