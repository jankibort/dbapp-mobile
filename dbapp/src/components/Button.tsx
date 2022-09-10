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

export type TButtonProps = {
  title: string | JSX.Element;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  buttonStyle?: ViewStyle | ViewStyle[];
  labelStyle?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
  testID?: string;
};

export const Button: FC<TButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  labelStyle,
  testID,
  ...rest
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[buttonStyle, styles.buttonShape]}
      testID={testID}
      {...rest}
    >
      <Text style={[labelStyle]}>{title}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
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
