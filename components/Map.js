import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Button, Platform } from 'react-native'

import ActionButton from './ActionButton'

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
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.initialRegion.latitude,
            longitude: this.state.initialRegion.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        {this.props.markers.map((marker, i) => {
          return (
          <MapView.Marker key={i}
            coordinate={marker.location}
          >
            <Tooltip name={marker.name} description={marker.description} addButton={this.props.addButton} onPress={() => this.props.onMarkerPress(marker.location)}/>
          </MapView.Marker>);
        })}
          <MapView.Polyline coordinates={this.props.polylines}/>
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
    <MapView.Callout onPress={() => Platform.OS !== "ios" ? onPress() : null}>
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
