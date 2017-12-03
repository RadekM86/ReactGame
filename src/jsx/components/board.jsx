import React from 'react';
import Row from './row.jsx';
import Dot from './dot.jsx';
import Dice from './dice.jsx';
import data from '../data/data.jsx';





export default class Board extends React.Component{
  constructor(props){
    super(props);
    this.state={
      layout: [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]
    }
  }
  render(){
    return <div>
      <Row layout={this.state.layout} send={this.props.send}>
        {this.props.children}
      </Row>
      </div>
  }
}



