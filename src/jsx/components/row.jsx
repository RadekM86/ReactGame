import React from 'react';
import Dot from './dot.jsx';
import data from '../data/data.jsx';
import Dice from './dice.jsx';
import CleanDice from '../data/cleanDice.jsx';
import orders from '../data/order.js';
import io from 'socket.io-client';

let checkedDots=data.mountFuji;

var rounds = 1;



function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}

let diceArray =  [data.dice1,data.dice2,data.dice3,data.dice4,data.dice5,data.dice6,data.dice7,data.dice8,data.dice9,data.dice10,data.dice11,data.dice12,data.dice13,data.dice14,data.dice15,data.dice16,data.dice17,data.dice18,data.dice19,data.dice20,data.dice21,data.dice22,data.dice23,data.dice24];







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
          dice: diceArray[0],
          que: rounds }
    }
    handleCheck = (number) => {
        
        let checkedDotsNew = this.state.checked;
        diceHandler(checkedDotsNew,number,this.state.dice);
        if (this.state.que%2 == 1){
          this.setState({dice: diceArray[orders.ord2[this.state.que]], checked: checkedDotsNew, counter1: this.state.counter1 + pointsHandler(checkedDotsNew, number, this.state.dice, this.state.player),rounds: this.state.que, player: (this.state.que)%2}); 
        }else{
          this.setState({dice: diceArray[orders.ord2[this.state.que]],checked: checkedDotsNew, counter2: this.state.counter2 + pointsHandler(checkedDotsNew, number, this.state.dice, this.state.player), rounds: this.state.que, player: (this.state.que)%2}); 
        }
         rounds++;
         let message =JSON.stringify({
          body: this.state.checked,
          que: rounds,
          counter1: this.state.counter1,
          counter2: this.state.counter2
         })
          
        
       
         this.socket.emit('message', message);
      
         
         
      }
    componentDidMount(){
      console.log(this.state.counter1)
      this.socket = io('/');
      this.socket.on('message', message=>{
          this.setState({checked: message.body, que: message.que, counter1: message.counter1, counter2: message.counter2})
      })
      
    }
    render(){
        let winner = (this.state.counter1 > this.state.counter2)? "1" : "2";
        
        let checkedLayout = this.state.checked;
        let round = (this.state.player==0)? "2":"1";
        let dots = checkedLayout.map((elem,index)=>{return <Dot  key={index} checkedElement={elem} number={index} onCheck={this.handleCheck} allChecked={this.state.checked}  round={rounds} />})
      return <div>
        <center>
        <h2 className="round">player {round} <span>  </span>   round {this.state.que} </h2>
        </center>
        <div className="wrapper">
        {dots}       
        </div>
        <div className="bottom wrapper">
        <div id="player1">player1 <br/> <span className="span"> {this.state.counter1}</span></div>
        <CleanDice dice={this.state.dice} player={this.state.que%2} round={this.state.que} winner={winner}/>
        <div id="player2">player2 <br/> <span className="span"> {this.state.counter2}</span></div>
         </div>
      </div>
    }
  }

