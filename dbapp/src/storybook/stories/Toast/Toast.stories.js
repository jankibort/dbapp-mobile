import { storiesOf } from '@storybook/react-native';
import React, { useEffect } from 'react';
import CenterView from '../CenterView';
import { ToastProvider, useToast } from 'react-native-toast-notifications';
import { View } from 'react-native';
import { Button } from '../../../components/Button';
import { COLORS } from '../../../constant';

const ToastWrapperView = ({ type }) => {
  const toast = useToast();

  const showToast = () => {
    toast.show(`Example Toast`, {
      duration: 10000,
      animationType: 'zoom-in',
      type,
      placement: 'top',
    });
  };
  return (
    <Button
      onPress={showToast}
      buttonStyle={{ backgroundColor: COLORS.LIGHT }}
      title="show toast"
    />
  );
};

storiesOf('Toast', module)
  .addDecorator((getStory) => (
    <CenterView
      desc={'Controlled Inputs link input field values with state value'}
    >
      <ToastProvider>{getStory()}</ToastProvider>
    </CenterView>
  ))
  .add('Error', () => <ToastWrapperView type="danger" />)
  .add('Success', () => <ToastWrapperView type="success" />);
