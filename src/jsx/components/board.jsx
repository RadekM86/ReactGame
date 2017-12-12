import React from 'react';
import Row from './row.jsx';
import Dot from './dot.jsx';
import Dice from './dice.jsx';
import data from '../data/data.jsx';





export default class Board extends React.Component{
  constructor(props){
    super(props);
    }
  render(){
    return <div>
      <Row  checked={this.props.checked} room={this.props.room}>
        {this.props.children}
      </Row>
      </div>
  }
}



