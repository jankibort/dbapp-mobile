import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Login: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello DBAPP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlignVertical: 'center',
  },
});
