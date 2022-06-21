import React, { FC, useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from '../../../../components';
import { IInsulin } from '../../../../Types';
import { InsulinForm } from '../InsulinForm';

export const InsulinDataScreen: FC = () => {
  const [longActingData, setLongActingData] = useState<IInsulin>({
    activeDuration: 0,
    peakEnd: 0,
    peakStart: 0,
    type: 'longActing',
  });

  const [shortActingData, setShortActingData] = useState<IInsulin>({
    activeDuration: 0,
    peakEnd: 0,
    peakStart: 0,
    type: 'longActing',
  });

  const handleChange = () => {};

  return (
    <ScrollView>
      <InsulinForm
        type="rapidActing"
        activeDuration={shortActingData.activeDuration}
        peakEnd={shortActingData.peakEnd}
        peakStart={shortActingData.peakStart}
        handleChange={handleChange}
      />
    </ScrollView>
  );
};
