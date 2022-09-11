import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, ControlledInput } from '../../components';
import { COLORS } from '../../constant';
import { NonAuthStackParams } from './NonAuthenticatedView';

const FormState = {
  username: '',
  password: '',
  confirmPassword: '',
};

export const SignUpScreen: FC = () => {
  const [formState, setFormState] = useState<typeof FormState>(FormState);

  const navigation =
    useNavigation<NativeStackNavigationProp<NonAuthStackParams>>();

  const handleInputChange = (
    value: string,
    target: 'username' | 'password' | 'confirmPassword',
  ) => {
    setFormState({ ...formState, [target]: value });
  };

  const handleSignUp = () => {
    console.log(formState);
  };

  return (
    <ScrollView style={styles.contentWrapper}>
      <Text style={styles.label}>Username</Text>
      <ControlledInput
        onChange={(val) => handleInputChange(val, 'username')}
        value={formState.username}
      />
      <Text style={styles.label}>Password</Text>
      <ControlledInput
        onChange={(val) => handleInputChange(val, 'password')}
        value={formState.password}
        type="password"
      />
      <Text style={styles.label}>Confirm password</Text>
      <ControlledInput
        onChange={(val) => handleInputChange(val, 'confirmPassword')}
        value={formState.confirmPassword}
        type="password"
      />
      <View style={[styles.buttonWrapper, { marginTop: 15 }]}>
        <Button
          title="Sign up!"
          onPress={() => handleSignUp()}
          buttonStyle={{
            backgroundColor: COLORS.SUCCESS,
            alignSelf: 'center',
          }}
          labelStyle={{ color: COLORS.LIGHT, fontSize: 20 }}
        />
      </View>
      <View style={[styles.buttonWrapper, { marginTop: 30 }]}>
        <Button
          title="Sign in here!"
          labelStyle={{ textDecorationLine: 'underline' }}
          buttonStyle={{
            marginHorizontal: 'auto',
          }}
          onPress={() => {
            setFormState(FormState);
            navigation.navigate('SignInScreen');
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    height: '100%',
    backgroundColor: COLORS.COMPONENT.NON_AUTH_BG,
  },
  buttonWrapper: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  label: {
    fontSize: 20,
    color: COLORS.LIGHT,
  },
});
