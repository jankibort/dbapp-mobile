import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ControlledInput } from '../../../components';
import { COLORS } from '../../../constants';

const FormState = {
  insulinAmount: 0,
  date: new Date(),
  carbohydrates: 0,
};

export const EntryScreen: FC = () => {
  const [formState, setFormState] = useState<typeof FormState>(FormState);

  const handleInputChange = (
    value: string,
    target: 'insulinAmount' | 'date' | 'carbohydrates',
  ) => {
    setFormState({ ...formState, [target]: value });
  };

  return (
    <View>
      <Text>Add record</Text>
      <Text style={styles.label}>Insulin amount</Text>
      <ControlledInput
        value={formState.insulinAmount === 0 ? '' : formState.insulinAmount}
        onChange={(val) => handleInputChange(val, 'insulinAmount')}
      />
      <Text style={styles.label}>Insulin amount</Text>
      <ControlledInput
        value={String(formState.date)}
        onChange={(val) => handleInputChange(val, 'date')}
      />
      <Text style={styles.label}>Insulin amount</Text>
      <ControlledInput
        value={formState.insulinAmount === 0 ? '' : formState.insulinAmount}
        onChange={(val) => handleInputChange(val, 'insulinAmount')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    height: '100%',
    backgroundColor: COLORS.COMPONENT.NON_AUTH_BG,
  },
  label: {
    fontSize: 20,
    color: COLORS.LIGHT,
  },
  buttonWrapper: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
