import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { EntryScreen } from './EntryScreen';

export type EntryStackParams = {
  Entry: undefined;
};

const EntryStack = createNativeStackNavigator<EntryStackParams>();

/**
 *
 * @returns stack component which is wrapper to create nested stack navigation insinde tab nav
 */
export const EntryStackScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<EntryStackParams>>();

  useEffect(() => {
    navigation.navigate('Entry');
  }, []);

  return (
    <EntryStack.Navigator
      initialRouteName="Entry"
      screenOptions={{ headerShown: false }}
    >
      <EntryStack.Screen
        name="Entry"
        component={EntryScreen}
        options={{ title: 'New entry' }}
      />
    </EntryStack.Navigator>
  );
};
