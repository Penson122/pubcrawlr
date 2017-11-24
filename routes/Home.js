import React from 'react';

import { View, Text, Button, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import FontText from '../components/FontText';
import ActionButton from '../components/ActionButton';

import RouteImage1 from '../img/route1.jpg';
// import RouteImage2 from '../img/route2.png';
// import RouteImage3 from '../img/route3.png';

const pastRoutes = [
  {
    name: "Bob's Birthday Bash",
    markers: [],
    venues: 5,
    miles: 2,
    daysAway: 5,
    img: RouteImage1
  }, {
    name: "John's Big Night Out",
    markers: [],
    venues: 5,
    miles: 2,
    daysAway: 5,
    img: RouteImage1
  }, {
    name: "Sally's Hen Do",
    markers: [],
    venues: 5,
    miles: 2,
    daysAway: 5,
    img: RouteImage1
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
        <View key={i} style={styles.route}>
          <Image style={styles.image} source={route.img}/>
          <View>
            <FontText style={{fontSize: 20}} onPress={() => 
            navigate('Plan', {markers: route.markers})
              }>{route.name}</FontText>
            <FontText style={styles.text}>{route.venues} venues</FontText>
            <FontText style={styles.text}>{route.miles} miles</FontText>
            <FontText style={styles.text} bold={true}>{route.daysAway} days away</FontText>   
          </View>       
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <FontText style={styles.title}>Your crawls</FontText>
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
  route: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 48,
    backgroundColor: '#388E44',
    color: '#FFFFFF',
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 16
  },
  text: {
    color: '#818181'
  }
});

export default Home;
