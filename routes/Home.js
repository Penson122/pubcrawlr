import React from 'react';

import { View, Text, Button, StyleSheet, ScrollView, FlatList } from 'react-native';
import FontText from '../components/FontText';
import ActionButton from '../components/ActionButton';

const pastRoutes = [
  {
    name: "Bob's Birthday Bash",
    markers: []
  }, {
    name: "John's Big Night Out",
    markers: []
  }, {
    name: "Sally's Hen Do",
    markers: []
  }
]

class Home extends React.Component {

  static navigationOptions = {
    title: 'Your Routes',
  };

  render() {
    const { navigate } = this.props.navigation;
    let routes = [];
    pastRoutes.forEach((route, i)  => {
      routes.push(
        <FontText key={i} style={{fontSize: 20}} onPress={() => 
          navigate('Plan', {markers: route.markers})
        }>{route.name}</FontText>);
    });

    return (
      <View style={styles.container}>
        <FontText style={styles.title}>Your Crawls</FontText>
        <View>{routes}</View>
        <Button
          title="New Crawl"
          onPress={() =>
            navigate('Plan')
          }
          color="#388E44"
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  title: {
    fontSize: 44,
    backgroundColor: '#388E44',
    color: '#FFFFFF',
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default Home;
