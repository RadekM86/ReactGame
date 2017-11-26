import React from 'react';

export default class Dice extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="select" onClick={this.props.handleSelect}>Left of right?</div>
    }
}