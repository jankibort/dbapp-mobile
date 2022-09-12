import React, { FC, useCallback, useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLORS, SUGAR_LEVEL_RANGE, TIME_INSULIN_ACTIVE } from '../../constant';
import { SugarContext } from '../../context';
import { InsulinRecordType } from '../../context/SugarContex';
import { differenceInMinutes } from 'date-fns';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFocusEffect } from '@react-navigation/native';
import { getRangeColor } from '../../helpers/getRangeColor';
import { getTimeFormatInHHmm } from '../../helpers/getTimeFormat';
import { getCarboRequirement } from '../../helpers/getCarboRequirement';

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
  const sugarRelatedBackgroundColor = getRangeColor(latestSugar?.range);
  const isInsulinActive =
    latestInjections.length !== 0 &&
    differenceInMinutes(date, latestInjections[0].dateTime) < 180
      ? true
      : false;

  return (
    <ScrollView style={styles.content}>
      {!latestSugar && latestInjections.length === 0 && (
        <View style={[styles.card, { backgroundColor: COLORS.DANGER }]}>
          <Text
            style={{ color: COLORS.LIGHT, fontSize: 20, fontWeight: 'bold' }}
          >
            Temporary lack of data
          </Text>
        </View>
      )}
      {latestSugar && (
        <View
          style={[
            styles.card,
            { backgroundColor: sugarRelatedBackgroundColor },
          ]}
        >
          <Text style={styles.label}>Latest sugar</Text>
          <Text style={styles.label}>Level: {latestSugar.value} mg/dL</Text>
          <Text style={styles.label}>
            Time: <>{getTimeFormatInHHmm(latestSugar.dateTime)}</>
          </Text>
        </View>
      )}
      {latestSugar && latestSugar.range === SUGAR_LEVEL_RANGE.HYPOGLYCEMIC && (
        <View
          style={[
            styles.card,
            { backgroundColor: sugarRelatedBackgroundColor },
          ]}
        >
          <Text style={styles.label}>Action hints!</Text>
          <Text style={styles.label}>
            <>
              You require to eat aprox{' '}
              {getCarboRequirement(latestSugar.value, isInsulinActive)} grams of
              carbohydrates!
              {isInsulinActive &&
                `You need to consume more due to active insulin.`}
            </>
          </Text>
        </View>
      )}
      {latestInjections.map((e: InsulinRecordType) => (
        <View style={styles.card} key={String(e.dateTime)}>
          <Text style={styles.label}>
            <>
              {e.amount} units | at {getTimeFormatInHHmm(e.dateTime)}
              {differenceInMinutes(date, e.dateTime) < TIME_INSULIN_ACTIVE && (
                <>
                  <Text>{` |  insulin is active  `}</Text>
                  <MaterialCommunityIcons
                    name="check-circle"
                    color={COLORS.SUCCESS}
                  />
                </>
              )}
            </>
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
