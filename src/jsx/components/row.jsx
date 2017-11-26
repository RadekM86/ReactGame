import React from 'react';
import Dot from './dot.jsx';
import data from '../data/data.jsx'

let checkedDots=data.checkerboard

let dice = data.diceThreeRight

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

export default class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
          checked: checkedDots
        }
        
    }
    handleClick = ()=>{
      this.setState({
          checked: !this.state.checked
      })
  }
  handleCheck = (number) => {
      console.log(this.state.checked[number])
      let checkedDotsNew = this.state.checked;
      diceHandler(checkedDotsNew,number,dice)
      this.setState({checked: checkedDotsNew});
  }
    render(){
        console.log(this.state.checked);
        let checkedLayout = this.state.checked;
        let dots = checkedLayout.map((elem,index)=>{return <Dot  key={index} checkedElement={elem} number={index} onCheck={this.handleCheck} allChecked={this.state.checked}/>})
      return <div className="wrapper">
       {dots}
      </div>
  
    }
  }

