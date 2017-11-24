import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import FontText from '../components/FontText';

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render(){
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <FontText style={styles.title}>Welcome To PubCrawlr!</FontText>
        <Button
          title="Login with Facebook"
          onPress={() =>
            navigate('Login')
          }
          color='#3b5998'
        />
        <Button
          title="Your Crawls"
          onPress = {() => 
            navigate('Home')
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

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  font: {
    fontFamily: 'sans-serif'
  }
})

export default Welcome;
