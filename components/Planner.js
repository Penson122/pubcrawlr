import React from 'react';
import { Text } from 'react-native';
import { FormInput, Card, Button } from 'react-native-elements';

class Planner extends React.Component {
  render() {
    function someFunction(){

    }
    return (
      <Card>
          <Text h3>How many pubs? </Text>
          <FormInput onChangeText={someFunction}/>
          <Text>{"\n"}</Text>

          <Text h3>How many people? </Text>
          <FormInput onChangeText={someFunction}/>
          <Text>{"\n"}</Text>

          <Text h3>Start Time: </Text>
          <FormInput onChangeText={someFunction}/>
          <Text>{"\n"}</Text>

          <Text h3>Starting destination: </Text>
          <FormInput onChangeText={someFunction}/>
          <Text>{"\n"}</Text>

          <Text h3>Final destination: </Text>
          <FormInput onChangeText={someFunction}/>
          <Text>{"\n"}</Text>

          <Button raised icon={{name: 'check'}} title='Find my route!' />
      </Card>
    );
  }
}

export default Planner;