import React from 'react';
export default class Content extends React.Component {
	render(){
		return(
			<div>
			<input type="text" value={this.props.userAnswer} onChange={(e) => {
					this.props.onQuestionAnswer(e.target.value)
				}}/>
			</div>
		);
	}
}