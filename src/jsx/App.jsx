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
    this.state={
      name: "",
      room: 1,
      loggedIn: true
    }
    }

handleChange = (e)=>{
  let roomNumber = e.target.value;
  this.setState({
    room: roomNumber
   
  })
  
}
handleSubmit = (e)=>{
  e.preventDefault;
  this.setState({
    loggedIn: true
  })
  this.socket.emit('room', socket.id);
}
  componentDidMount(){
    this.socket = io('/');
    this.socket.on('room', room => {this.setState({room: roomNumber})})
  }
  
  render(){
    if (this.state.loggedIn){
      return <div>
      <Board  room={this.state.room} />
      </div>
    }else{
      return <div>
        <form onSubmit={this.handleSubmit}><input type="text" placeholder="join or create room" value={this.state.room} onChange={this.handleChange}/></form>
          </div>
    }
             
  }
}


  ReactDOM.render(
        <App  />,
        document.getElementById('app')
    );
});
