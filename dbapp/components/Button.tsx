import React, { FC } from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

type Props = {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  buttonStyle?: ViewStyle;
  labelStyle?: StyleProp<TextStyle>;
};

export const Button: FC<Props> = ({
  title,
  onPress,
  buttonStyle,
  labelStyle,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[buttonStyle, styles.buttonShape]}
      {...rest}
    >
      <Text style={[labelStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonShape: {
    alignSelf: 'flex-start',
    textAlignVertical: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    justifyContent: 'space-around',
    alignContent: 'center',
    minHeight: 26,
  },
});
