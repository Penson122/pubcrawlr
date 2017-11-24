import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import FontText from '../components/FontText';

class Home extends React.Component {

  static navigationOptions = {
    title: 'Your Routes',
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FontText style={styles.title}>Your Crawls</FontText>
        <Button
          title="New Crawl"
          onPress={() =>
            navigate('Plan')
          }
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
