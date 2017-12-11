import React from 'react';
import data from '../data/data.jsx';

let colorPlayer1 = "#A0F";
let colorPlayer2 = "#FA0";

export default class SvgComponent extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let color = ((this.props.player===1)?colorPlayer1:colorPlayer2);
		let color2 = ((this.props.player===1)?colorPlayer2:colorPlayer1)
		let diceLayout = [];
		diceLayout = this.props.dice.map((elem)=>{return (elem ==1)?color:"none"})
		if (this.props.round>=23){
			return <center><div className="gameOver">Game Over<span> <br/>player {this.props.winner} wins</span></div></center>
		} return <div className="dice" style={{borderColor: color}}>
	<center>

<svg version="1.1" id="dice" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 width="90px" height="90px" viewBox="0 0 80 80" enableBackground="new 0 0 80 80" >
<g>
	<circle fill={diceLayout[4]}  cx="40" cy="40" r="9.546"/>
	<circle fill={diceLayout[1]}  cx="40" cy="14.545" r="9.546"/>
	<circle fill={diceLayout[7]}  cx="40" cy="65.454" r="9.546"/>
	<circle fill={diceLayout[5]}  cx="65.455" cy="40" r="9.545"/>
	<circle fill={diceLayout[3]}  cx="14.545" cy="40" r="9.545"/>
	<circle fill={diceLayout[0]}  cx="14.545" cy="14.545" r="9.545"/>
	<circle fill={diceLayout[2]}  cx="65.455" cy="14.545" r="9.545"/>
	<circle fill={diceLayout[8]}  cx="65.455" cy="65.454" r="9.545"/>
	<circle fill={diceLayout[6]}  cx="14.545" cy="65.454" r="9.545"/>
</g>
</svg>
</center>

</div>
}}
