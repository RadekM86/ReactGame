import React from 'react';
import ReactDOM from 'react-dom';
// import data from "./data/data.jsx";


document.addEventListener('DOMContentLoaded', function(){

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div>
          <h1>Hello World!</h1>
          </div>
  }
}


  ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});