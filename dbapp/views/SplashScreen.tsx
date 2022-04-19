import { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';

export const SplashScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../assets/Logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.uiContainer}>
        <Text style={styles.containerText}>Take care of your diabetes!</Text>
        <Button onPress={() => console.log('pressed')} title="Sign In" />
        {/* <Button onPress={} title="Sign Up" /> */}
      </View>
    </View>
  );
};

const { width } = Dimensions.get('screen');
const logoSize = width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlignVertical: 'center',
    backgroundColor: '#fff',
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
    flex: 1,
    backgroundColor: '#8391f7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  containerText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
  },
});
