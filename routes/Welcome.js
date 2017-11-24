import React from 'react';

import { View, Text, Button, StyleSheet, Image } from 'react-native';
import FontText from '../components/FontText';

import LoginImage from '../img/login-image.jpg';

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
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
        {/* <Button
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
        <Button
          title="Plan"
          onPress={() =>
            navigate('Plan')
          }
        /> */}
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
  },
  font: {
    fontFamily: 'sans-serif'
  }
})

export default Welcome;
