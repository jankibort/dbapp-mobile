import React, { FC } from 'react';
import {
  Button as RnButton,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

export enum ButtonTypes {
  circle,
  normal,
}

export enum ButtonThemes {
  primary,
  danger,
  warning,
  info,
}

type Props = {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  type?: ButtonTypes;
  theme?: ButtonThemes;
  style?: null;
};

export const Button: FC<Props> = ({
  title,
  onPress,
  type = ButtonTypes.normal,
  theme = ButtonThemes.primary,
  style,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={(styles[type], styles[theme], style)}
      {...rest}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  [ButtonTypes.normal]: {
    borderRadius: 6,
  },
  [ButtonThemes.primary]: {
    backgroundColor: '#317cf5',
  },
  [ButtonThemes.danger]: {
    backgroundColor: '#c22338',
  },
  [ButtonThemes.info]: {
    backgroundColor: '#2cd4d4',
  },
  [ButtonThemes.warning]: {
    backgroundColor: '#c2a023',
  },
});
