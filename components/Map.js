import React from 'react';

import { StyleSheet } from 'react-native'

import { MapView } from 'expo';

class Map extends React.Component {
  render(){
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default Map;
