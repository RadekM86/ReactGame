import React from 'react';
import Row from './row.jsx';
import Dot from './dot.jsx';
import Dice from './dice.jsx';

export default class Board extends React.Component{
  constructor(props){
    super(props);
    this.state={
      layout: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]
    }
  }
  render(){
    return <div>
      <Row layout={this.state.layout}>
        {this.props.children}
      </Row>
  </div>
  }
}



