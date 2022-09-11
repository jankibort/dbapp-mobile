import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { ToastProvider, useToast } from 'react-native-toast-notifications';
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
      desc={
        'Toasts are pop-up notifications notifying user if action ended with a success or an error'
      }
    >
      <ToastProvider>{getStory()}</ToastProvider>
    </CenterView>
  ))
  .add('Error', () => <ToastWrapperView type="danger" />)
  .add('Success', () => <ToastWrapperView type="success" />);
