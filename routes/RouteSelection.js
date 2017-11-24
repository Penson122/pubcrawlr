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
        <Map></Map>
    )
  }
};

export default RouteSelection;
