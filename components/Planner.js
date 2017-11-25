import React from 'react';
import { Text, StyleSheet, View, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { FormInput, Card, Button, Slider, CheckBox } from 'react-native-elements';
import { getPubs, norwichLatLng } from '../routes/RouteSelection';
import FontText from '../components/FontText';
import {GOOGLE_MAPS_API_KEY} from '../constants';
const styles = StyleSheet.create({
  text: {
    paddingLeft: 20,
    fontSize: 16
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
      startTime: '',
      barResults: [],
      barNames: [],
      modalVisible: false
    }
    this.done = this.done.bind(this);
    this.viewModal = this.viewModal.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
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
      startTime: this.state.startTime,
      people: this.state.people,
      bars: this.state.bars,
      clubs: this.state.clubs,
      startLocation: this.state.startLocation
    });
  }
  onTimeChange(time){
    this.setState({startTime: time});
  }
  render() {
    function someFunction(){
      // Input for form
    }
    return (
      <Card>
        <ScrollView>
          <FontText bold style={styles.text}>How many people? </FontText>
          <View style={{paddingLeft: 16}}>
            <Slider
              style={{ width: 300 }}
              step={1}
              minimumValue={1}
              maximumValue={50}
              value={this.state.people}
              onValueChange={val => this.setState({ people: val })}
            />
          </View>
          <FontText style={styles.text}>{this.state.people}</FontText>
          <Text>{"\n"}</Text>

          <FontText bold style={styles.text}>Start Time: </FontText>
          <FormInput onChangeText={someFunction}/>
          <Text>{"\n"}</Text>

          <FontText bold style={styles.text}>Max walking distance: </FontText>
          <View style={{paddingLeft: 16}}>
            <Slider
              style={{width: 300}}
              step={1}
              minimumValue={350}
              maximumValue={1000}
              value={this.state.maxDistance}
              onValueChange={val => this.setState({ maxDistance: val })}
            />
          </View>
          <FontText style={styles.text}>{this.state.maxDistance} meters</FontText>
          <Text>{"\n"}</Text>

          <FontText bold style={styles.text}>Filter: </FontText>
          <CheckBox center title='Bars' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.bars} />
          <CheckBox center title='Clubs' checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.clubs}  />
          <Text>{"\n"}</Text>
          <Button
            title='Select Start Location      >'
            onPress={() => this.viewModal(true)}
          />
          <SelectStartLocation bars={this.state.barResults} visible={this.state.modalVisible} onClose={this.viewModal}/>
          {this.state.startLocation ?
            <FontText bold style={styles.text}>{this.state.startLocation.name}</FontText> : null}
          {this.state.startLocation ? <Button raised backgroundColor='#338f40' icon={{name: 'check'}} title='Find my route!' onPress={this.done} /> : null}
        </ScrollView>
      </Card>
    );
  }
}

const SelectStartLocation = ({ bars, visible, onClose }) => {
  const barText = bars.map((b, i) => {
    return (
    <TouchableOpacity key={i} onPress={() => onClose(false, b)}>
      <View style={{borderTopWidth: 4, borderBottomWidth: 4, borderColor: '#EEEEEE', padding: 6}}>
        <FontText style={{marginLeft: 8, fontSize: 16}} bold>{b.name}</FontText>
      </View>
    </TouchableOpacity>
    );
  });
  return (
    <View style={{paddingTop: 22}}>
      <Modal
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
