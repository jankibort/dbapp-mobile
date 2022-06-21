import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../constants';

type Props = {
  onChange: ((text: string) => void) | undefined;
  value: string | number;
  type?: 'text' | 'password';
};

export const ControlledInput: FC<Props> = ({
  onChange,
  value,
  type = 'text',
  ...restProps
}) => {
  return (
    <TextInput
      {...restProps}
      value={value}
      onChangeText={onChange}
      style={styles.input}
      secureTextEntry={type === 'password' && true}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.LIGHT,
    borderColor: COLORS.PRIMARY,
    height: 36,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
  },
});
