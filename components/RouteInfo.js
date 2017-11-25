import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import FontText from '../components/FontText';

const RouteInfo = ({name, attendees, startDate, startTime, startLocation, endLocation, totalDistance}) => {
    return (
      <View>
      <View style={styles.container}>
        <FontText bold style={styles.title}>{name}</FontText>
      </View>
        <Card>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <FontText style={{fontSize: 16}}>Attendees: <FontText bold>{attendees}</FontText></FontText>
              <FontText style={{fontSize: 16}}>Date: <FontText bold>{"25/11/17"}</FontText></FontText>
              <FontText style={{fontSize: 16}}>Start Time: <FontText bold>{startTime}</FontText></FontText>
            </View>
            <View>
              <FontText style={{fontSize: 16}}>Start: <FontText bold>{startLocation}</FontText></FontText>
              <FontText style={{fontSize: 16}}>End: <FontText bold>{endLocation}</FontText></FontText>
              <FontText style={{fontSize: 16}}>Distance: <FontText bold>{totalDistance}</FontText>m</FontText>
            </View>
            {<View></View>}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingTop: 8}}><Icon name='edit'/></View>
        </Card>
      </View>
    );
}

export default RouteInfo;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    backgroundColor: '#388E44',
    color: '#FFFFFF',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  bold: {
    fontWeight: 'bold',
  },
});
