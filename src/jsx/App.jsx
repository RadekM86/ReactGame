import React from 'react';
import ReactDOM from 'react-dom';
// import data from "./data/data.jsx";
import Board from './components/board.jsx'
import Row from './components/row.jsx'
import io from 'socket.io-client';



document.addEventListener('DOMContentLoaded', function(){
  // var socket = io.connect("http://localhost:4000", function(socket){
  //   socket.join('game');
  //   socket.on('round', function(msg){
  //     console.log(msg)
  //   })
  // });
// socket.emit('player', 'player1');  

var newMsg = null;

class App extends React.Component{
  constructor(props){
    super(props);
    }
  // componentDidMount(){
  //   this.socket = this.io("http://localhost:4000");
  //   this.socket.on('connection', function(){
  //     this.socket.join('game')
  //   })
  //   this.socket.on('player', function(msg){
  //     console.log('==============');
  //     console.log(msg);
  //   })
  // }
  // sendMsg = (msg)=>{
  //   this.socket.emit('player', msg);
  //  }
  
  render(){
    return <div>
          <Board   />
          </div>
  }
}


  ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
