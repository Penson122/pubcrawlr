import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ActionButton = ({onPress, color, size}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather name='plus-circle' size={size} color={color} />
    </TouchableOpacity>
  )
}

ActionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default ActionButton;
