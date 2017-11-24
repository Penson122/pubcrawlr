import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import FontText from '../components/FontText';

class RouteInfo extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.container}>
        <FontText bold style={styles.title}> Todd's Pub Crawl</FontText>
      </View>
        <Card>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <FontText style={{fontSize: 16}}>Attendees: <FontText bold>20</FontText></FontText>
              <FontText style={{fontSize: 16}}>Date: <FontText bold>25/11/17</FontText></FontText>
              <FontText style={{fontSize: 16}}>Start Time: <FontText bold>18:30</FontText></FontText>
            </View>
            <View>
              <FontText style={{fontSize: 16}}>Start: <FontText bold>The Mischief</FontText></FontText>
              <FontText style={{fontSize: 16}}>End: <FontText bold>Mantra</FontText></FontText>
              <FontText style={{fontSize: 16}}>Distance: <FontText bold>1.2 miles</FontText></FontText>
            </View>
            {<View></View>}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingTop: 8}}><Icon name='edit'/></View>
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
