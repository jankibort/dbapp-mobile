import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from '../../../components/Button';
import { COLORS } from '../../../constants';
import { UserContext } from '../../../context/UserContext';
import { ProfileStackParams } from './ProfileStackScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  const { setLoggedUser } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.buttonsWrapper}>
      <Button
        labelStyle={styles.buttonLabel}
        buttonStyle={[styles.button, { backgroundColor: COLORS.DANGER }]}
        title={
          <>
            <Text>Sign out</Text>
            <MaterialCommunityIcons name="logout" size={20} />
          </>
        }
        onPress={() => {
          setLoggedUser &&
            setLoggedUser({ isLogged: false, name: '', token: '' });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    flex: 1,
    alignSelf: 'center',
  },
  button: {
    marginTop: 20,
    width: 280,
  },
  buttonLabel: {
    color: COLORS.LIGHT,
    fontWeight: '700',
    fontSize: 20,
    paddingVertical: 6,
  },
});
