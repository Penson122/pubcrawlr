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
          title="Map"
          style={{marginTop: '2em'}}
          onPress={() =>
            navigate('Router')
          }
        />
        <Button
          title="Home"
          style={{marginTop: '2em'}}
          onPress={() =>
            navigate('Home')
          }
        />
      </View>
    )
  }
};

export default Welcome;
