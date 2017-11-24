import React from 'react';
import { Text } from 'react-native';
import { FormInput, Card, Button, Slider } from 'react-native-elements';

class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pub: 5, people: 10 }
  }
  render() {
    function someFunction(){

    }
    return (
      <Card>
          <Text h3>How many pubs? </Text>
          <Slider
            style={{ width: 300 }}
            step={1}
            minimumValue={1}
            maximumValue={15}
            value={this.state.pub}
            onValueChange={val => this.setState({ pub: val })}
          />
          <Text>{this.state.pub}</Text>
          <Text>{"\n"}</Text>

          <Text h3>How many people? </Text>
          <Slider
            style={{ width: 300 }}
            step={1}
            minimumValue={1}
            maximumValue={50}
            value={this.state.people}
            onValueChange={val => this.setState({ people: val })}
          />
          <Text>{this.state.people}</Text>
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