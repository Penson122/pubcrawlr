import React from 'react';

import Planner from '../components/Planner';

class Plan extends React.Component {
  constructor(props){
    super(props);
    this.onDone = this.onDone.bind(this);
  }
  onDone(params){
    const { navigate } = this.props.navigation;
    navigate('Router', {options: params});
  }
  render(){
    return (
      <Planner onDone={this.onDone}/>
    )
  }
};

export default Plan;
