import React from 'react';
import Content from "./Content";
import Actionbar from "./Actionbar"
export default class Game extends React.Component {
	constructor(props){
		super(props);
		this._onClick = this._onClick.bind(this);
	}

	_onClick(id){
    	this.props.onClick(id);
  	}

	render(){
		return(
			<div className="Game">
				
				<Content
					imagen={this.props.question.attachment.url}
					question={this.props.question} 
					onQuestionAnswer={this.props.onQuestionAnswer}
          		/>

				<Actionbar onClick={this._onClick} currentQuestion = {this.props.currentQuestion} questions = {this.props.questions}/>
			</div>
		);
	}
}