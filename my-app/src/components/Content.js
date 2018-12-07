import React from 'react';
import Question from './Question';
import Answer from './Answer';
export default class Content extends React.Component {
	render(){

		return(

			<div>
			
				<Question question={this.props.question}/>
				<Answer userAnswer={this.props.question.userAnswer || ""} onQuestionAnswer= {this.props.onQuestionAnswer}/>
				<img src={this.props.imagen} alt="img" height="300" width="300"/>

			</div>
		);
	}
}