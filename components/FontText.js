import React from 'react';
import { Text, Platform } from 'react-native';
import { Font } from 'expo';
import ProximaNovaBold from '../fonts/proximaNovaBold.otf';

export default class FontText extends React.Component {
  state = {
    font: {
      fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif'
    }
  };

  async componentDidMount() {
    await Font.loadAsync({'proxima-nova-bold': ProximaNovaBold});

    this.setState({font: {fontFamily: 'proxima-nova-bold'}});
  }

  render() {
    return (
      <Text style={[this.props.style, this.state.font]}>{this.props.children}</Text>
    )
  }
}
