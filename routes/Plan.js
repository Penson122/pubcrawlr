import React from 'react';

import { Text } from 'react-native';

class Plan extends React.Component {
  static navigationOptions = {
    title: 'Plan your route',
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <Text>Plan!</Text>
    )
  }
};

export default Plan;
