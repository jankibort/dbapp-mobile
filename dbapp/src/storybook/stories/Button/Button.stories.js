import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from '../../../components/Button';
import CenterView from '../CenterView';
import { COLORS } from '../../../../constants';

const props = {
  title: 'click here',
  onPress: () => ({}),
  labelStyle: { color: COLORS.LIGHT },
};

storiesOf('Button', module)
  .addDecorator((getStory) => (
    <CenterView
      desc={
        'Button component is handling logic. Styles need to be adjusted via `buttonStyle` and `labelStyle` props typeof ViewStyle | ViewStyle[]'
      }
    >
      {getStory()}
    </CenterView>
  ))
  .add('Primary', () => (
    <Button {...props} buttonStyle={{ backgroundColor: COLORS.PRIMARY }} />
  ))
  .add('Success', () => (
    <Button {...props} buttonStyle={{ backgroundColor: COLORS.SUCCESS }} />
  ))
  .add('Warning', () => (
    <Button {...props} buttonStyle={{ backgroundColor: COLORS.WARNING }} />
  ))
  .add('Danger', () => (
    <Button {...props} buttonStyle={{ backgroundColor: COLORS.DANGER }} />
  ));
