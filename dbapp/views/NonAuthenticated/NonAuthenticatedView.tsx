import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { COLORS } from '../../constants';
import { SignInScreen } from './SignInScreen';
import { SignUpScreen } from './SignUpScreen';
import { SplashScreen } from './SplashScreen';

export type NonAuthStackParams = {
  SignInScreen: undefined;
  SplashScreen: undefined;
  SignUpScreen: undefined;
};

const NonAuthStack = createNativeStackNavigator<NonAuthStackParams>();

export const NonAuthenticatedView: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Animatable.Image
          source={require('../../assets/Logo.png')}
          style={styles.logo}
          resizeMode="stretch"
          animation="bounceIn"
          duration={1500}
        />
      </View>
      <Animatable.View
        animation="fadeInUp"
        style={styles.uiContainer}
        duration={600}
      >
        <NonAuthStack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{ headerShown: false }}
        >
          <NonAuthStack.Screen name="SignInScreen" component={SignInScreen} />
          <NonAuthStack.Screen name="SplashScreen" component={SplashScreen} />
          <NonAuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
        </NonAuthStack.Navigator>
      </Animatable.View>
    </View>
  );
};

const { width } = Dimensions.get('screen');
const logoSize = width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlignVertical: 'center',
    backgroundColor: COLORS.LIGHT,
    width: '100%',
  },
  logoWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: logoSize,
    height: logoSize * 0.65,
  },
  uiContainer: {
    flex: 3,
    backgroundColor: COLORS.COMPONENT.NON_AUTH_BG,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
