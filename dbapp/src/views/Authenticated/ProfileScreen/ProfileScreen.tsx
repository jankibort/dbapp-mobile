import React, { FC, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from '../../../components/Button';
import { COLORS } from '../../../constant';
import { UserContext } from '../../../context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen: FC = () => {
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
    marginTop: 20,
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
