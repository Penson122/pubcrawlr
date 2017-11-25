import React from 'react';

import { View, StyleSheet } from 'react-native';
import RouteInfo from '../components/RouteInfo';
import Map from '../components/Map';

const norwichLatLng = {latitude: 52.630886, longitude: 1.297355};

class Overview extends React.Component {
  constructor(props){
    super(props);
    const {state} = props.navigation;
    const savedRoute = state.params.savedRoute;
    const options = savedRoute.routeOptions;
    this.state = {
      people: options.people,
      startTime: options.startTime,
      startLocation: savedRoute.startLocation,
      endLocation: savedRoute.endLocation,
      totalDistance: options.maxDistance,
      markers: savedRoute.selectedMarkers,
      polylines: savedRoute.polylines
    }
  }
  //name, startDate
  render(){
    return (
      <View style={{justifyContent: 'space-between', alignItems: 'stretch'}}>
        <View style={{paddingBottom: 50}}>
          <RouteInfo
            attendees={this.state.people}
            startTime={this.state.startTime}
            endLocation={this.state.endLocation.name}
            startLocation={this.state.startLocation.name}
          />
        </View>
        <View style={styles.container}>
          <Map addButton={false}
          initialRegion={norwichLatLng}
          markers={this.state.markers}
          polylines={this.state.polylines}
          style={styles.container}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    width: 400,
    height: 400,
  },
})

export default Overview;
