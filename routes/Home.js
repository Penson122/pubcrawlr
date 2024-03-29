import React from 'react';

import { View, Text, Button, StyleSheet, ScrollView, FlatList, Image, TouchableHighlight } from 'react-native';
import FontText from '../components/FontText';
import ActionButton from '../components/ActionButton';
import { Card } from 'react-native-elements';

import RouteImage1 from '../img/route1.jpg';
import RouteImage2 from '../img/route2.jpg';
import RouteImage3 from '../img/route3.jpg';

const bobsRoute = require('./bobsRoute');
const johnsRoute = require('./johnsStagDo');
const pastRoutes = [
  {
    name: "Wayne's Bday",
    markers: [],
    savedRoute: bobsRoute,
    venues: 5,
    miles: 500,
    daysAway: 5,
    img: RouteImage1
  }, {
    name: "Juliana's HenDo",
    markers: [],
    savedRoute: johnsRoute,
    venues: 5,
    miles: 500,
    daysAway: 5,
    img: RouteImage2
  }
]

class Home extends React.Component {

  constructor(props){
    super(props);
    const {state} = props.navigation;
    if(state.params){
      const newRoute = state.params.newRoute;
      newRoute.img = RouteImage3;
      pastRoutes = [newRoute, ...pastRoutes];
    }
  }

  static navigationOptions = {
    title: 'Your Routes',
  };

  render() {
    const { navigate } = this.props.navigation;
    let routes = [];
    pastRoutes.forEach((route, i)  => {
      routes.push(
        <Card key={i}>
          <TouchableHighlight underlayColor='#CCCCCC' onPress={() => {
              route.savedRoute.routeOptions.saveable = false;
              navigate('Overview', {savedRoute: route.savedRoute})}}>
            <View style={styles.route}>
              <Image style={styles.image} source={route.img}/>
              <View style={{paddingTop: 10, paddingBottom: 20, justifyContent: 'space-around'}}>
                <FontText style={{fontSize: 20}} bold>{route.name}</FontText>
                <View>
                  <FontText style={styles.text}>{route.venues} venues</FontText>
                  <FontText style={styles.text}>{route.miles} meters</FontText>
                  <FontText style={styles.text} bold>{route.daysAway} days away</FontText>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </Card>
      );
    });

    return (
      <View style={styles.container}>
        <FontText style={styles.title} bold>Your crawls</FontText>
        <ScrollView>
          {routes}
          <Button
            title="New Crawl"
            onPress={() =>
              navigate('Plan')
            }
            color="#388E44"
            style={{paddingTop: 8, paddingBottom: 8}}
          />
        </ScrollView>
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
    width: 140,
    height: 140,
    marginRight: 16
  },
  text: {
    color: '#818181'
  }
});

export default Home;
