import React from 'react';
import Dot from './dot.jsx';
import data from '../data/data.jsx';
import Dice from './dice.jsx';

let checkedDots=data.allChecked

let dice = data.diceThreeRight

var rounds = 1;

function diceHandler(array, index, layout){
  array[index]=(array[index]+layout[4])%2;
  array[index+1]=(array[index+1]+layout[5])%2;
  array[index-1]=(array[index-1]+layout[3])%2;
  array[index+6]=(array[index+6]+layout[7])%2;
  array[index+7]=(array[index+7]+layout[8])%2;
  array[index+5]=(array[index+5]+layout[6])%2;
  array[index-6]=(array[index-6]+layout[1])%2;
  array[index-7]=(array[index-7]+layout[0])%2;
  array[index-5]=(array[index-5]+layout[2])%2;
  return array
}

function pointsHandler(array,index, layout, player){
  let arrayToCheck = [
    array[index-7], array[index-6], array[index-5], array[index-1], array[index], array[index+1],array[index+5], array[index+6], array[index+7]
  ];
  let diceToCheck = layout;
  let points = [];
  console.log("array to check" + arrayToCheck);
  console.log("layout to check" + layout)
  if(player!==1){
    for(let i = 0; i<layout.length; i++){
      if (layout[i]!==0){
        arrayToCheck[i]==layout[i]? points.push(1):points.push(-1)
      }
    }
  }else{
    for(let i = 0; i<layout.length; i++){
      if (layout[i]!==0){
        arrayToCheck[i]!==layout[i]? points.push(1):points.push(-1)
      }
    }
  }
  console.log(points)
  let result = points.reduce((prev,curr)=>{return prev+curr})
  return result
}

export default class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
          checked: checkedDots,
          counter1: 0,
          counter2: 0,
          player: 1,
          dice: data.diceThreeRight
        }
    }
    handleSelect = ()=>{
      this.setState({
        dice: data.diceThreeLeft
      })
    }
    handleCheck = (number) => {
        console.log(this.state.checked[number])
        let checkedDotsNew = this.state.checked;
        diceHandler(checkedDotsNew,number,this.state.dice);
        if (this.state.player == 1){
          this.setState({checked: checkedDotsNew, counter1: this.state.counter1 + pointsHandler(checkedDotsNew, number, this.state.dice, this.state.player), player: (this.state.player+1)%2});
        }else{
          this.setState({checked: checkedDotsNew, counter2: this.state.counter2 + pointsHandler(checkedDotsNew, number, this.state.dice, this.state.player), player: (this.state.player+1)%2});
        }
         rounds++
      }
    render(){
        console.log(this.state.checked);
        let checkedLayout = this.state.checked;
        let round = (this.state.player==0)? "2":"1";
        let dots = checkedLayout.map((elem,index)=>{return <Dot  key={index} checkedElement={elem} number={index} onCheck={this.handleCheck} allChecked={this.state.checked}/>})
      return <div>
        <button onClick={this.handleSelect}>Change direction</button>
        <h3>player1 {this.state.counter1}</h3><h3>player2 {this.state.counter2}</h3>
        <h2>player {round} round </h2>
        <div className="wrapper">
        {dots}       
        </div>
      </div>
    }
  }

