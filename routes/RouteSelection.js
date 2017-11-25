import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

import {GOOGLE_MAPS_API_KEY} from '../constants';

import Map from '../components/Map';

export const norwichLatLng = {latitude: 52.630886, longitude: 1.297355};

export const getPubs = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      // create warning service is down
      console.error(error);
    });
}

class RouteSelection extends React.Component {
  static navigationOptions = {
    title: 'New Route',
  };
  constructor(props){
    super(props);
    const {state} = this.props.navigation;
    const options = state.params.options;
    const radius = options.maxDistance ? options.maxDistance : 500;
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + options.startLocation.location.latitude + ',' + options.startLocation.location.longitude + '&radius=' + radius + '&type=bar&key=' + GOOGLE_MAPS_API_KEY;
    options.startLocation.color = 'red';
    this.state = {
      routeOptions: options,
      markers: [],
      selectedMarkers: [options.startLocation],
      startLocation: options.startLocation,
      url: url,
      polylines: [options.startLocation.location]
    }
    this.onMarkerPress = this.onMarkerPress.bind(this);
    this.onDone = this.onDone.bind(this);
  }
  onMarkerPress(marker){
      const selected = this.state.selectedMarkers.slice(0);
      const found = selected.find(i => i.name === marker.name);
      if(!found){
        selected.push(marker);
      }
      const polylines = selected.map(s => s.location);
      this.setState({selectedMarkers: selected, polylines: polylines});
  }
  onDone(){
    const {navigate} = this.props.navigation;
    const {state} = this.props.navigation;
    const options = state.params.options;
    const endLocation = this.state.selectedMarkers[this.state.selectedMarkers.length - 1];
    endLocation.color = 'blue';
    const nextState = {
      startLocation: this.state.startLocation,
      polylines: this.state.polylines,
      selectedMarkers: this.state.selectedMarkers,
      routeOptions: this.state.routeOptions,
      endLocation: this.state.selectedMarkers[this.state.selectedMarkers.length - 1]
    }
    navigate('Overview', {savedRoute: nextState});
  }
  componentDidMount(){
    getPubs(this.state.url).then(res => {
      const bars = res.results.map(item => (
        {
          location: {
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng
        },
        name: item.name,
        description: item.vicinity
        }));
      const uniqueBars = bars.filter(i => i.name !== this.state.startLocation.name);
      this.setState({markers: uniqueBars});
    });
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <Map
        addButton={true}
        initialRegion={norwichLatLng}
        startLocation={this.state.startLocation}
        markers={this.state.markers}
        onMarkerPress={this.onMarkerPress}
        onDone={this.onDone}
        polylines={this.state.polylines}
      />
    )
  }
};

export default RouteSelection;
