import React from 'react';

import { View } from 'react-native';
import RouteInfo from '../components/RouteInfo';
import Map from '../components/Map';

const norwichLatLng = {latitude: 52.630886, longitude: 1.297355};

class Overview extends React.Component {
  render(){
    return (
      <View>
      <RouteInfo />
        <View>
          <Map addButton={true} initialRegion={norwichLatLng} markers={[]}/>
        </View>
      </View>
    );
  }
}

export default Overview;