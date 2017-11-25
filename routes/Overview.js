import React from 'react';

import { View, StyleSheet, Button } from 'react-native';
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
      name: options.name,
      people: options.people,
      startTime: options.startTime,
      startDate: options.startDate,
      startLocation: savedRoute.startLocation,
      endLocation: savedRoute.endLocation,
      totalDistance: options.maxDistance,
      markers: savedRoute.selectedMarkers,
      polylines: savedRoute.polylines
    }
    this.done = this.done.bind(this);
  }
  done(){
    const {navigate} = this.props.navigation;
    const savedRoute = {
      startLocation: this.state.startLocation,
      polylines: this.state.polylines,
      selectedMarkers: this.state.markers,
      endLocation: this.state.endLocation,
      routeOptions: {
        name: this.state.name,
        maxDistance: this.state.totalDistance,
        startTime: this.state.startTime,
        people: this.state.people,
        bars: true,
        clubs: false,
        startLocation: this.state.startLocation
      }
    }
    const newState = {
      name: this.state.name,
      savedRoute: savedRoute,
      venues: this.state.markers.length,
      miles: this.state.totalDistance
    }
    navigate('Home', {newRoute: newState});
  }
  render(){
    return (
      <View style={{justifyContent: 'space-between', alignItems: 'stretch'}}>
        <View style={{paddingBottom: 50}}>
          <RouteInfo
            totalDistance={this.state.totalDistance}
            name={this.state.name}
            attendees={this.state.people}
            startTime={this.state.startTime}
            startDate={this.state.startDate}
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
        <View>
          <Button raised backgroundColor='#338f40' icon={{name: 'check'}} title='Save route!' onPress={this.done} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '40%',
  },
})

export default Overview;
