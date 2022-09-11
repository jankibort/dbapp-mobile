import React, { FC, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ControlledInput } from '../../../components';
import { COLORS } from '../../../constant';
import { format } from 'date-fns';
import { SugarContext } from '../../../context';
import { useToast } from 'react-native-toast-notifications';
import { SugarRangesType } from '../../../context/SugarContex';

const FormState = {
  insulinAmount: '',
  sugarLevel: '',
};

export const EntryScreen: FC = () => {
  const [formState, setFormState] = useState<typeof FormState>(FormState);
  const { setInsulinRecord, setSugarRecord } = useContext(SugarContext);

  const toast = useToast();

  const getSugarRange = (value: number): SugarRangesType => {
    switch (true) {
      case value < 90:
        return 'low';
      case value >= 90 && value < 140:
        return 'ok';
      case value >= 140:
        return 'high';
      default:
        return 'ok';
    }
  };

  const handleSubmit = () => {
    if (formState.insulinAmount || formState.sugarLevel) {
      const dateTime = new Date();

      formState.insulinAmount &&
        setInsulinRecord &&
        setInsulinRecord((records) => [
          ...records,
          {
            amount: Number(formState.insulinAmount),
            dateTime,
          },
        ]);

      formState.sugarLevel &&
        setSugarRecord &&
        setSugarRecord((records) => [
          ...records,
          {
            value: Number(formState.sugarLevel),
            range: getSugarRange(Number(formState.sugarLevel)),
            dateTime,
          },
        ]);

      toast.show(`Data succesfully saved`, {
        duration: 3000,
        animationType: 'zoom-in',
        type: 'success',
        placement: 'top',
      });

      setFormState(FormState);
    } else {
      toast.show(`Fill in the data`, {
        duration: 3000,
        animationType: 'zoom-in',
        type: 'warning',
        placement: 'top',
      });
    }
  };

  const handleInputChange = (
    value: string,
    target: 'insulinAmount' | 'sugarLevel',
  ) => {
    formState && setFormState({ ...formState, [target]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Injected insulin amount</Text>
      <ControlledInput
        value={formState?.insulinAmount || ''}
        onChange={(val) => handleInputChange(val, 'insulinAmount')}
      />
      <Text style={styles.label}>Sugar Level</Text>
      <ControlledInput
        value={formState?.sugarLevel || ''}
        onChange={(val) => handleInputChange(val, 'sugarLevel')}
      />
      <Button
        title="Add entry!"
        onPress={handleSubmit}
        buttonStyle={{
          backgroundColor: COLORS.SUCCESS,
          alignSelf: 'center',
          width: '100%',
          marginTop: 30,
        }}
        labelStyle={{ color: COLORS.LIGHT, fontSize: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: 280, flex: 1, alignSelf: 'center', marginTop: 20 },
  contentWrapper: {
    height: '100%',
    backgroundColor: COLORS.COMPONENT.NON_AUTH_BG,
  },
  label: {
    fontSize: 20,
    color: COLORS.PRIMARY,
  },
  buttonWrapper: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
