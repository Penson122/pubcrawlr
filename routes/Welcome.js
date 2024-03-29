import React from 'react';

import { View, Text, Button, StyleSheet, Image } from 'react-native';
import FontText from '../components/FontText';

import LoginImage from '../img/login-image.jpg';

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'PubCrawlr',
  };

  render(){
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image style={{width: 300, height: 300}} source={LoginImage}/>
        <Button
          title="Login with Facebook"
          onPress={() =>
            navigate('Home')
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
    marginBottom: 20,
  },
  image: {
    width: 200
  },
  container: {
    flex: 1,
    backgroundColor: '#338F40',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Welcome;
