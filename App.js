import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';

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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default BasicApp
