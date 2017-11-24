import React from 'react';
import { Text, StyleSheet, View, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { FormInput, Card, Button, Slider, CheckBox } from 'react-native-elements';
import { getPubs, norwichLatLng } from '../routes/RouteSelection';
import {GOOGLE_MAPS_API_KEY} from '../constants';
const styles = StyleSheet.create({
  text: {
    paddingLeft: 20,
  },
});

class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maxDistance: 500,
      people: 10,
      bars: true,
      clubs: false,
      startLocation: undefined,
      barResults: [],
      barNames: [],
      modalVisible: false
    }
    this.done = this.done.bind(this);
    this.viewModal = this.viewModal.bind(this);
  }

  componentDidMount(){
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + norwichLatLng.latitude + ',' + norwichLatLng.longitude + '&radius=' + this.state.maxDistance + '&type=bar&key=' + GOOGLE_MAPS_API_KEY;
    getPubs(url).then(res => {
      const bars = res.results.map(r => r.name);
      this.setState({barResults: res.results, barNames: bars});
    })
  }
  viewModal(visible, element){
    this.setState({modalVisible: visible})
    if(element){
      this.setState({startLocation: element});
    }
  }
  done(){
    const startLocation = this.state.startLocation;
    startLocation.location = {
      latitude: startLocation.geometry.location.lat,
      longitude: startLocation.geometry.location.lng
    }
    this.props.onDone({
      maxDistance: this.state.maxDistance,
      people: this.state.people,
      bars: this.state.bars,
      clubs: this.state.clubs,
      startLocation: startLocation
    });
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

          <Text h3 style={styles.text}>Max walking distance: </Text>
          <View style={styles.text}>
            <Slider
              style={{width: 300}}
              step={1}
              minimumValue={350}
              maximumValue={1000}
              value={this.state.maxDistance}
              onValueChange={val => this.setState({ maxDistance: val })}
            />
          </View>
          <Text style={styles.text}>{this.state.maxDistance} meters</Text>
          <Text>{"\n"}</Text>

          <Text h3 style={styles.text}>Filter: </Text>
          <CheckBox center title='Bars' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.bars} />
          <CheckBox center title='Clubs' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.clubs}  />
          <Text>{"\n"}</Text>
          <Button
            title='Select Start Location'
            onPress={() => this.viewModal(true)}
          />
          <SelectStartLocation bars={this.state.barResults} visible={this.state.modalVisible} onClose={this.viewModal}/>
          {this.state.startLocation ? <Text h3 style={styles.text}>{this.state.startLocation.name}</Text> : null}
          {this.state.startLocation ? <Button raised backgroundColor='#338f40' icon={{name: 'check'}} title='Find my route!' onPress={this.done} /> : null}
      </Card>
    );
  }
}

const SelectStartLocation = ({ bars, visible, onClose }) => {
  const barText = bars.map((b, i) => {
    return (
    <TouchableOpacity key={i} onPress={() => onClose(false, b)}>
      <Text style={{paddingTop: '7%'}} h3 color='black'>{b.name}</Text>
    </TouchableOpacity>
    );
  });
  return (
    <View style={{paddingTop: 22}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        style={{marginLeft: '2%'}}
        onRequestClose={() => {onClose(false)}}
        >
        <ScrollView>
          {barText}
        </ScrollView>

      </Modal>
    </View>);
}

export default Planner;
