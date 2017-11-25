import React from 'react';

import { View, StyleSheet } from 'react-native';
import RouteInfo from '../components/RouteInfo';
import Map from '../components/Map';

const norwichLatLng = {latitude: 52.630886, longitude: 1.297355};

const Overview = ({markers, poyllines, }) => {
    return (
      <View style={{justifyContent: 'space-between', alignItems: 'stretch'}}>
        <View style={{paddingBottom: 50}}>
          <RouteInfo/>
        </View>
        <View style={styles.container}>
          <Map addButton={false} initialRegion={norwichLatLng} markers={[]} polylines={[]} style={styles.container}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    width: 400,
    height: 400,
  },
})

export default Overview;
