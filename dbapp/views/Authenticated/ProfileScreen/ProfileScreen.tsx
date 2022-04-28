import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useContext } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from '../../../components/Button';
import { COLORS } from '../../../constants';
import { UserContext } from '../../../context/UserContext';
import { ProfileStackParams } from './ProfileStackScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ProfileScreen: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  const { setLoggedUser } = useContext(UserContext);

  return (
    <ScrollView style={styles.buttonsWrapper}>
      <Button
        labelStyle={styles.buttonLabel}
        buttonStyle={[styles.button, { backgroundColor: COLORS.PRIMARY }]}
        title={
          <>
            <Text>Share diary </Text>
            <MaterialCommunityIcons name="share-variant" size={20} />
          </>
        }
        onPress={() => {
          navigation.navigate('DataShare');
        }}
      />
      <Button
        labelStyle={styles.buttonLabel}
        buttonStyle={[styles.button, { backgroundColor: COLORS.PRIMARY }]}
        title={
          <>
            <Text>Insulin data </Text>
            <MaterialCommunityIcons name="spoon-sugar" size={20} />
          </>
        }
        onPress={() => {
          navigation.navigate('InsulinData');
        }}
      />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    flex: 1,
  },
  button: {
    marginTop: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonLabel: {
    color: COLORS.LIGHT,
    fontWeight: '800',
    fontSize: 20,
    paddingVertical: 6,
  },
});
