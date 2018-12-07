import React from 'react';
export default class Button extends React.Component {
	constructor(props){
    super(props);
    this._onClick = this._onClick.bind(this);
  	}

  	_onClick(id){
  		this.props.onClick(this.props.id);
 	}

	render(){
		return(
			<div className="Button">
				<button onClick={this._onClick} disabled={this.props.disabled}>
				{this.props.id}	
				</button>
			</div>
		);
	}
}	