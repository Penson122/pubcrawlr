import React from 'react';

import { Text, View } from 'react-native';
import Map from '../components/Map';

class RouteSelection extends React.Component {
  static navigationOptions = {
    title: 'Your Routes',
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
        <Map initialRegion={{latitude: 52.630886, longitude: 1.297355}}/>
    )
  }
};

export default RouteSelection;
