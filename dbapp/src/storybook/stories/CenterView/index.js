import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import style from './style';

export default function CenterView({ children, desc }) {
  return (
    <>
      <Text>{desc}</Text>
      <View style={style.main}>{children}</View>
    </>
  );
}

CenterView.defaultProps = {
  children: null,
  desc: '',
};

CenterView.propTypes = {
  children: PropTypes.node,
  propTypes: PropTypes.string,
};
