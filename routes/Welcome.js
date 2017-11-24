import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome To PubCrawlr!</Text>
        <Button
          title="Login with Facebook"
          onPress={() =>
            navigate('Login')
          }
          color='#3b5998'
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
})

export default Welcome;
