import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import FontText from '../components/FontText';

class RouteInfo extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.container}>
        <FontText style={styles.title}>{"Todd's Pub Crawl"}</FontText>
      </View>
        <Card>
          <Text h2>Attendees: </Text>
          <Text h2>Date: </Text>
          <Text h2>Start Time: </Text>
          <Text h2>Start: </Text>
          <Text h2>End: </Text>
          <Text h2>Distance: </Text>
          <Icon name='edit' />
        </Card>
      </View>
    );
  }
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
