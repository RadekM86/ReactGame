import React from 'react';
import ReactDOM from 'react-dom';
// import data from "./data/data.jsx";
import Board from './components/board.jsx'
import Row from './components/row.jsx'


document.addEventListener('DOMContentLoaded', function(){

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div>
          <Board/>
          </div>
  }
}


  ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
