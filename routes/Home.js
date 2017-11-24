import React from 'react';

import { Text, View, ScrollView, FlatList } from 'react-native';

import ActionButton from '../components/ActionButton';

const pastRoutes = [
  {
    name: "Bob's Birthday Bash"
  }, {
    name: "John's Big Night Out"
  }, {
    name: "Sally's Hen Do"
  }
]

class Home extends React.Component {
  static navigationOptions = {
    title: 'Your Routes',
  };
  render(){
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <ActionButton style={{float: 'right'}} onPress={() => console.log('press ActionButton')} color='green' size={30} />
        <FlatList
          data={pastRoutes}
          renderItem={(item, i) => <Text key={i}>{item.name}</Text>}
        />
      </ScrollView>
    )
  }
};

export default Home;
