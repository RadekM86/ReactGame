import React from 'react';

export default class Dot extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isHovered: false,
            allChecked: this.props.allChecked
        }
    }
    handleChecks = ()=>{
                    
        if (typeof this.props.onCheck === 'function') {
            this.props.send(this.state.allChecked)
            this.props.onCheck(this.props.number);
            this.setState({
                checkedDot: this.props.allChecked[this.props.number],

            })
        }
    }
    handleHover= ()=>{
        this.setState({
            isHovered: !this.state.isHovered
        });
    }
    render(){
        const btnClass = this.state.isHovered ? " hover " : ""
        if (this.props.checkedElement == 1){
            return <div className={btnClass + "checked dot slide"} onClick={this.handleChecks} onMouseOver={this.handleHover} onMouseOut={this.handleHover}></div>
        }
      return <div className={"" + btnClass +"dot unslide"} onClick={this.handleChecks} onMouseOver={this.handleHover} onMouseOut={this.handleHover}></div>
  
    }
  }

