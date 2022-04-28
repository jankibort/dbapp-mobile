import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { ProfileScreen } from './ProfileScreen';
import { DataShareScreen, InsulinDataScreen } from './ProfileScreens';

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
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="InsulinData" component={InsulinDataScreen} />
      <ProfileStack.Screen name="DataShare" component={DataShareScreen} />
    </ProfileStack.Navigator>
  );
};
