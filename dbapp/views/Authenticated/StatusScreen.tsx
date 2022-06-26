import { format } from 'date-fns';
import React, { FC, useCallback, useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants';
import { SugarContext } from '../../context';
import { InsulinRecordType } from '../../context/SugarContex';
import { differenceInMinutes } from 'date-fns';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect } from '@react-navigation/native';

export const StatusScreen: FC = () => {
  const { sugarRecords, insulinRecords } = useContext(SugarContext);
  const [date, setDate] = useState(new Date());

  useFocusEffect(
    useCallback(() => {
      setDate(new Date());
    }, [setDate]),
  );

  const latestSugar = sugarRecords[sugarRecords.length - 1];
  const latestInjections = insulinRecords.reverse().slice(0, 3);
  const isInsulinActive =
    latestInjections.length !== 0 &&
    differenceInMinutes(date, latestInjections[0].dateTime) < 180
      ? true
      : false;

  return (
    <ScrollView style={styles.content}>
      {!latestSugar && latestInjections.length === 0 && (
        <Text
          style={{ color: COLORS.DANGER, fontSize: 20, fontWeight: 'bold' }}
        >
          Temporary lack of data :(
        </Text>
      )}
      {latestSugar && (
        <View
          style={[
            styles.card,
            latestSugar.range === 'low' && { backgroundColor: COLORS.DANGER },
            latestSugar.range === 'ok' && { backgroundColor: COLORS.SUCCESS },
            latestSugar.range === 'high' && { backgroundColor: COLORS.WARNING },
          ]}
        >
          <Text style={styles.label}>Latest sugar</Text>
          <Text style={styles.label}>Level: {latestSugar.value} mg/dL</Text>
          <Text style={styles.label}>
            Time: {format(latestSugar.dateTime, 'HH:mm')}
          </Text>
        </View>
      )}
      {latestSugar && (
        <View
          style={[
            styles.card,
            latestSugar.range === 'low' && { backgroundColor: COLORS.DANGER },
            latestSugar.range === 'ok' && { backgroundColor: COLORS.SUCCESS },
            latestSugar.range === 'high' && { backgroundColor: COLORS.WARNING },
          ]}
        >
          <Text style={styles.label}>Action hints!</Text>
          <Text style={styles.label}>
            {latestSugar.range === 'low' &&
              `You require to eat aprox ${
                ((130 - latestSugar.value) * 10) / isInsulinActive ? 20 : 35
              } grams of carbohydrates! `}
            {isInsulinActive &&
              `You need to consume more due to active insulin.`}
          </Text>
        </View>
      )}
      {latestInjections.map((e: InsulinRecordType) => (
        <View style={styles.card} key={String(e.dateTime)}>
          <Text style={styles.label}>
            {e.amount} units | at {format(e.dateTime, 'HH:mm')}
            {console.log(differenceInMinutes(date, e.dateTime))}
            {differenceInMinutes(date, e.dateTime) < 180 && (
              <>
                <Text>{` |  insulin is active  `}</Text>
                <MaterialCommunityIcons
                  name="check-circle"
                  color={COLORS.SUCCESS}
                />
              </>
            )}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: 18,
    flex: 1,
    width: 280,
    alignSelf: 'center',
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: COLORS.DISABLED,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  label: {
    color: 'black',
    fontWeight: '600',
  },
});
