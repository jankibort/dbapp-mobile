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

export const EntryStackScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<EntryStackParams>>();

  useEffect(() => {
    navigation.navigate('Entry');
    console.log('navigated to entry');
  }, []);

  return (
    <EntryStack.Navigator
      initialRouteName="Entry"
      screenOptions={{ headerShown: false }}
    >
      <EntryStack.Screen name="Entry" component={EntryScreen} />
    </EntryStack.Navigator>
  );
};
