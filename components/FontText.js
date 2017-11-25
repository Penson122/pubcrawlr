import React from 'react';
import { Text, Platform } from 'react-native';
import { Font } from 'expo';
import ProximaNovaBold from '../fonts/proximaNovaBold.otf';
import ProximaNova from '../fonts/proximaNovaRegular.otf';

export default class FontText extends React.Component {
  state = {
    font: {
      fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif'
    }
  };

  async componentDidMount() {
    const fontFamily = this.props.bold ? 'proxima-nova-bold' : 'proxima-nova';

    if (this.props.bold) {
      await Font.loadAsync({'proxima-nova-bold': ProximaNovaBold});
    } else {
      await Font.loadAsync({'proxima-nova': ProximaNova});
    }

    this.setState({font: {fontFamily: fontFamily}});
  }

  render() {
    return (
      <Text style={[this.props.style, this.state.font]}>{this.props.children}</Text>
    )
  }
}
