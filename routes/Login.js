import React from 'react';

import { Text } from 'react-native';

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  componentDidMount(){
    const { navigate } = this.props.navigation;
    navigate('Home');
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <Text>Login!</Text>
    )
  }
};

export default Login;
