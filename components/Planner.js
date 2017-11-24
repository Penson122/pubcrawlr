import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FormInput, Card, Button, Slider, CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
  text: {
    paddingLeft: 20,
  },
});

class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = { maxDistance: 3, people: 10, bars: true, clubs: false }
  }
  render() {
    function someFunction(){
      // Input for form
    }
    return (
      <Card>
          <Text h3 style={styles.text}>How many people? </Text>
          <View style={styles.text}>
            <Slider
              style={{ width: 300 }}
              step={1}
              minimumValue={1}
              maximumValue={50}
              value={this.state.people}
              onValueChange={val => this.setState({ people: val })}
            />
          </View>
          <Text style={styles.text}>{this.state.people}</Text>
          <Text>{"\n"}</Text>

          <Text h3 style={styles.text}>Start Time: </Text>
          <FormInput onChangeText={someFunction}/>
          <Text>{"\n"}</Text>

          <Text h3 style={styles.text}>Starting destination: </Text>
          <FormInput onChangeText={someFunction}/>
          <Text>{"\n"}</Text>

          <Text h3 style={styles.text}>Max walking distance: </Text>
          <View style={styles.text}>
            <Slider
              style={{width: 300}}
              step={1}
              minimumValue={1}
              maximumValue={5}
              value={this.state.maxDistance}
              onValueChange={val => this.setState({ maxDistance: val })}
            />
          </View>
          <Text style={styles.text}>{this.state.maxDistance} miles</Text>
          <Text>{"\n"}</Text>

          <Text h3 style={styles.text}>Filter: </Text>
          <CheckBox center title='Bars' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.bars} />
          <CheckBox center title='Clubs' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.clubs}  />
          <Text>{"\n"}</Text>

          <Button raised backgroundColor='#338f40' icon={{name: 'check'}} title='Find my route!' />
      </Card>
    );
  }
}

export default Planner;