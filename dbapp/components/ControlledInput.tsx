import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = {
  onChange: ((text: string) => void) | undefined;
};

export const ControlledInput: FC<Props> = ({ onChange }) => {
  return (
    <>
      <TextInput onChangeText={onChange} style={styles.input} />;
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 36,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
