import React from 'react';
import Button from "./Button";
export default class Actionbar extends React.Component {
	constructor(props){
		super(props);
		this._onClick = this._onClick.bind(this);
	}

	_onClick(id){
    	this.props.onClick(id);
  	}

	render(){
		let atras_disabled = false;
		let sig_disabled = false;
		let sub_disabled = false;
		
		if(this.props.currentQuestion === 0){
			atras_disabled = true
		}else if(this.props.currentQuestion === (this.props.questions.length)-1){
			sig_disabled = true
		}

		return(
			<div className="Actionbar">
				<Button id="Atras" onClick={this._onClick} disabled={atras_disabled}/>
				<Button id="Siguiente" onClick={this._onClick} disabled={sig_disabled} />
				<Button id="Submit" onClick={this._onClick} disabled={sub_disabled} />
			</div>
		);
	}
}		
	