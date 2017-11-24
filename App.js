import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { StackNavigator } from 'react-navigation';
import HeaderImage from './img/pubcrawlr.png';
import Home from './routes/Home';
import Login from './routes/Login';
import Plan from './routes/Plan';
import Welcome from './routes/Welcome';
import RouteSelection from './routes/RouteSelection';

const BasicApp = StackNavigator({
  Main: {screen: Welcome},
  Login: {screen: Login},
  Plan: {screen: Plan},
  Home: {screen: Home},
  Router: {screen: RouteSelection}
}, {
  navigationOptions: {
    headerTintColor: '#388E44',
    headerRight: <Image source={HeaderImage} style={{height: 20, width: 114}}/>,
    headerStyle: {paddingRight: 20}
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#388e44'
  }
});


export default BasicApp
