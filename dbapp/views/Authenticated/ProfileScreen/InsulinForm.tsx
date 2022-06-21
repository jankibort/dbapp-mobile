import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button, ControlledInput } from '../../../components';
import { COLORS } from '../../../constants';
import { IInsulin } from '../../../Types';

interface IProps extends IInsulin {
  handleChange: () => void;
}

export const InsulinForm: FC<IProps> = ({
  activeDuration,
  peakEnd,
  peakStart,
  type,
  handleChange,
}) => {
  const [insulinFormState, setInsulinFormState] = useState<IInsulin>({
    type,
    activeDuration,
    peakEnd,
    peakStart,
  });

  const insulinTypeString =
    type === 'rapidActing' ? 'Rapid-acting' : 'Long-acting';

  const handleInputChange = (
    value: string | number,
    target: 'type' | 'peakStart' | 'peakEnd' | 'activeDuration',
  ) => {
    setInsulinFormState({ ...insulinFormState, [target]: value });
  };

  const onSubmit = () => {};

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{insulinTypeString}</Text>
      <Text style={styles.label}>Active duration</Text>
      <ControlledInput
        value={insulinFormState.activeDuration}
        onChange={(val) => handleInputChange(val, 'activeDuration')}
      />
      <Text style={styles.label}>Insulin peak start time</Text>
      <ControlledInput
        value={insulinFormState.peakStart}
        onChange={(val) => handleInputChange(val, 'peakStart')}
      />
      <Text style={styles.label}>Insulin peak end time</Text>
      <ControlledInput
        value={insulinFormState.peakEnd}
        onChange={(val) => handleInputChange(val, 'peakEnd')}
      />
      <Button
        onPress={onSubmit}
        title={`Save ${insulinTypeString} insulin data`}
        buttonStyle={styles.submitButton}
        labelStyle={styles.submitButtonLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.LIGHT,
    margin: 8,
  },
  heading: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
    color: COLORS.PRIMARY,
  },
  label: {
    fontSize: 12,
    color: COLORS.PRIMARY,
  },
  submitButton: {
    backgroundColor: COLORS.WARNING,
  },
  submitButtonLabel: {
    color: COLORS.LIGHT,
    fontWeight: '600',
  },
});
