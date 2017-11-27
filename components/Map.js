import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Button, Platform } from 'react-native'
import { GOOGLE_DIRECTIONS_API_KEY } from '../constants';
import MapViewDirections from './MapViewDirections';
import ActionButton from './ActionButton'

import { MapView } from 'expo';

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initialRegion: {
        latitude: props.initialRegion.latitude,
        longitude: props.initialRegion.longitude
      },
      directions: []
    }
  }
  render(){
    let prev = this.props.polylines[0];
    const res = []
    for (let i = 1; i < this.props.polylines.length; i++){
      res.push([prev, this.props.polylines[i]]);
      prev = this.props.polylines[i];
    }
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.initialRegion.latitude,
            longitude: this.state.initialRegion.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          ref="map"
        >
        {this.props.startLocation
          ? <MapView.Marker
            coordinate={this.props.startLocation.location}
            pinColor={this.props.startLocation.color ? this.props.startLocation.color : 'green'}
            style={{zIndex: 0}}
            onPress={() => { this.refs.map.animateToViewingAngle(Math.random(), 0); }}               
            >
              <Tooltip
                name={this.props.startLocation.name}
                description={this.props.startLocation.description}
                onPress={() => this.props.onMarkerPress(this.props.startLocation.location)}
              />
            </MapView.Marker>
          : null}
        {this.props.markers.map((marker, i) => {
          return (
          <MapView.Marker key={`map_${i}`}
            coordinate={marker.location}
            pinColor={marker.color ? marker.color : 'green'}
            style={{zIndex: 0}} 
            onPress={() => { this.refs.map.animateToViewingAngle(Math.random(), 0); }}               
          >
            <Tooltip name={marker.name} description={marker.description} addButton={this.props.addButton} onPress={() => this.props.onMarkerPress(marker)}/>
          </MapView.Marker>);
        })}
        {
          res.map((r, i) => (
            <MapViewDirections
             key={`coordinate_${i}`}
             origin={r[0]}
             destination={r[1]}
             strokeWidth={3}
             strokeColor={'#338f40'}
             apikey={GOOGLE_DIRECTIONS_API_KEY}
           />
          ))
        }
        </MapView>
        <View style={styles.button}>
        { this.props.onDone ? <Button title='Done' onPress={this.props.onDone}/> : null}
        </View>
      </View>
    )
  }
}

const Tooltip = ({name, description, onPress, addButton}) => {
  return (
    <MapView.Callout onPress={() => Platform.OS !== "ios" ? onPress() : null} style={{zIndex: 999}}>
    <View style={{padding: 10}}>
      <View>
        <Text>{name}</Text>
      </View>
      <Text>{description}</Text>
      <View>
        {(addButton === true && Platform.OS === "ios") ? <ActionButton size={15} color='#338f40' onPress={onPress} style={{zIndex: 100}}/> : null}
      </View>
    </View>
    </MapView.Callout>
  )
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    marginBottom: '10%'
  }
});

export default Map;
