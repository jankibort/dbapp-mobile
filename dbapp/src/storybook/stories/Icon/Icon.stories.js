import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const props = { color: 'black', size: 26 };

storiesOf('Icon', module)
  .addDecorator((getStory) => (
    <CenterView desc={'Icons used in app'}>{getStory()}</CenterView>
  ))
  .add('App Icons', () => (
    <>
      <MaterialCommunityIcons name="home" {...props} />
      <MaterialCommunityIcons name="heart-plus-outline" {...props} />
      <MaterialCommunityIcons name="human-child" {...props} />
      <MaterialCommunityIcons name="check-circle" {...props} />
      <MaterialCommunityIcons name="logout" {...props} />
    </>
  ));
