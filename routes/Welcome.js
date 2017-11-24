import React from 'react';

import { View, Text, Button } from 'react-native';

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome To PubCrawlr!</Text>
        <Button
          title="Login"
          onPress={() =>
            navigate('Login')
          }
        />
        <Button
          title="Plan"
          onPress={() =>
            navigate('Plan')
          }
        />
      </View>
    )
  }
};

export default Welcome;
