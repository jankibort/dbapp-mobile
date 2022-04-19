import React, { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const SignInScreen: FC = () => {
  const handleInputChange = (e) => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Sign In!</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Username</Text>
        <TextInput />
        <Text style={styles.label}>Password</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    backgroundColor: '#8391f7',
    // color: 'white',
    // fontWeight: '500',
  },
  header: {},
  label: {},
});
