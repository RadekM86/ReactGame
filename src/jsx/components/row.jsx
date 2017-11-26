import React from 'react';
import Dot from './dot.jsx';

let checkedDots=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

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
      checkedDots[number]=(checkedDots[number]+1)%2;
      checkedDots[number+1]=(checkedDots[number+1]+1)%2;
      checkedDots[number-1]=(checkedDots[number-1]+1)%2;
      checkedDots[number+6]=(checkedDots[number+6]+1)%2;
      checkedDots[number+7]=(checkedDots[number+7]+1)%2;
      checkedDots[number+5]=(checkedDots[number-5]+1)%2;
      checkedDots[number-6]=(checkedDots[number-6]+1)%2;
      checkedDots[number-7]=(checkedDots[number-7]+1)%2;
      checkedDots[number-5]=(checkedDots[number-5]+1)%2;
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

