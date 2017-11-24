import React from 'react';

import { StyleSheet } from 'react-native'

import { MapView } from 'expo';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initialRegion: {
        latitude: props.initialRegion.latitude,
        longitude: props.initialRegion.longitude
      }
    }
  }
  render(){
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.state.initialRegion.latitude,
          longitude: this.state.initialRegion.longitude,
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
