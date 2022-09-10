import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { ControlledInput } from '../../../components';

const props = { value: 'sample', onChange: () => ({}) };

storiesOf('Input', module)
  .addDecorator((getStory) => (
    <CenterView
      desc={'Controlled Inputs link input field values with state value'}
    >
      {getStory()}
    </CenterView>
  ))
  .add('Secret', () => <ControlledInput {...props} type={'password'} />)
  .add('Text', () => <ControlledInput {...props} />);
