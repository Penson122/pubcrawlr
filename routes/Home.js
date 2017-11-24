import React from 'react';

import { Text } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Your Routes',
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <Text>Home!</Text>
    )
  }
};

export default Home;
