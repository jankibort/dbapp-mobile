import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, ControlledInput } from '../../components';
import { COLORS } from '../../constants';
import { UserContext, UserType } from '../../context/UserContext';
import { NonAuthStackParams } from './NonAuthenticatedView';

const FormState = {
  username: '',
  password: '',
};

export const SignInScreen: FC = () => {
  const [formState, setFormState] = useState<typeof FormState>(FormState);
  const { setLoggedUser } = useContext(UserContext);

  const navigation =
    useNavigation<NativeStackNavigationProp<NonAuthStackParams>>();

  const handleInputChange = (
    value: string,
    target: 'username' | 'password',
  ) => {
    setFormState({ ...formState, [target]: value });
  };

  const handleSignIn = (data: UserType) => {
    setLoggedUser(data);
    console.log('have tried to sign in');
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
      <View style={[styles.buttonWrapper, { marginTop: 15 }]}>
        <Button
          title="Sign in!"
          onPress={() => handleSignIn()}
          buttonStyle={{
            backgroundColor: COLORS.PRIMARY,
            alignSelf: 'center',
          }}
          labelStyle={{ color: COLORS.LIGHT, fontSize: 20 }}
        />
      </View>
      <View style={[styles.buttonWrapper, { marginTop: 30 }]}>
        <Button
          title="Sign up here!"
          labelStyle={{ textDecorationLine: 'underline' }}
          buttonStyle={{
            marginHorizontal: 'auto',
          }}
          onPress={() => {
            setFormState(FormState);
            navigation.navigate('SignUpScreen');
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
  label: {
    fontSize: 20,
    color: COLORS.LIGHT,
  },
  buttonWrapper: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
