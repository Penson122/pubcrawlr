import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

import {GOOGLE_MAPS_API_KEY} from '../constants';

import Map from '../components/Map';

const norwichLatLng = {latitude: 52.630886, longitude: 1.297355};

const getPubs = (url) => {
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
    console.log(options.maxDistance);
    const radius = options.maxDistance ? options.maxDistance : 500;
    console.log(radius);
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + norwichLatLng.latitude + ',' + norwichLatLng.longitude + '&radius=' + radius + '&type=bar&key=' + GOOGLE_MAPS_API_KEY;
    this.state = {
      markers: [],
      selectedMarkers: [],
      url: url
    }
    this.onMarkerPress = this.onMarkerPress.bind(this);
    this.onDone = this.onDone.bind(this);
  }
  onMarkerPress(location){
      const selected = this.state.selectedMarkers.slice(0);
      const found = selected.find(i => i.latitude === location.latitude && i.longitude === location.longitude)
      if(!found){
        selected.push(location);
      }
      this.setState({selectedMarkers: selected});
  }
  onDone(){
    console.log('done');
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
      this.setState({markers: bars});
    });
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <Map
        addButton={true}
        initialRegion={norwichLatLng}
        markers={this.state.markers}
        onMarkerPress={this.onMarkerPress}
        onDone={this.onDone}
        polylines={this.state.selectedMarkers}
      />
    )
  }
};

export default RouteSelection;
