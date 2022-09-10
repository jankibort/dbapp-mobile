import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../constant';

type Props = {
  onChange: ((text: string) => void) | undefined;
  value?: string;
  type?: 'text' | 'password';
  disabled?: boolean;
};

export const ControlledInput: FC<Props> = ({
  onChange,
  value,
  type = 'text',
  disabled,
  ...restProps
}) => {
  return (
    <TextInput
      {...restProps}
      value={value}
      onChangeText={onChange}
      style={[styles.input, disabled && styles.disabled]}
      secureTextEntry={type === 'password' && true}
      editable={!disabled}
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
  disabled: {
    backgroundColor: COLORS.DISABLED,
  },
});
