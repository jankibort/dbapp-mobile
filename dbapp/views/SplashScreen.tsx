import { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

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
        <Text style={styles.containerText}>hello</Text>
      </View>
    </View>
  );
};

const { height } = Dimensions.get('screen');
const logoSize = height * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlignVertical: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  logoWrapper: {
    flex: 2,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: logoSize * 1.38,
    height: logoSize,
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
  },
});
