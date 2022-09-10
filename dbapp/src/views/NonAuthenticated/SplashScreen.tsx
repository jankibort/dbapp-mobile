import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NonAuthStackParams } from './NonAuthenticatedView';
import { COLORS } from '../../constant/styles';

export const SplashScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NonAuthStackParams>>();

  return (
    <View style={styles.contentWrapper}>
      <Text style={[styles.containerText, { marginBottom: 35 }]}>
        Take care of your diabetes!
      </Text>
      <View style={styles.buttonsWrapper}>
        <Button
          onPress={() => navigation.navigate('SignInScreen')}
          title="Sign In"
          buttonStyle={{
            backgroundColor: COLORS.LIGHT,
            borderColor: COLORS.PRIMARY,
            height: 40,
          }}
          labelStyle={{
            fontSize: 20,
            color: COLORS.PRIMARY,
            paddingHorizontal: 20,
          }}
        />
        <Button
          onPress={() => navigation.navigate('SignUpScreen')}
          title="Sign Up"
          buttonStyle={{
            backgroundColor: COLORS.LIGHT,
            borderColor: COLORS.PRIMARY,
            height: 40,
          }}
          labelStyle={{
            fontSize: 20,
            color: COLORS.PRIMARY,
            paddingHorizontal: 20,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: COLORS.COMPONENT.NON_AUTH_BG,
    height: '100%',
  },
  containerText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
  },
  buttonsWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
