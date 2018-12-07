import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import Title from "./Title";
import {questionAnswer} from '../redux/actions';
import {changeQuestion} from '../redux/actions';
import {submit} from '../redux/actions';
import {initQuestions} from '../redux/actions';

class App extends Component {
  constructor(props){
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(id){
    if(id === "Submit"){
      this.props.dispatch(submit(this.props.questions)); 
    }else{
      this.props.dispatch(changeQuestion(id)); 
    } 
  }

  render() {

    //Alert por ausencia de preguntas (array vacio)
    if(this.props.questions.length < 1){
      setTimeout(function(){
        alert("No hay preguntas por responder. Disculpe las molestias");
      }.bind(this),0);
    }

    //Pantalla de resultado
    if(this.props.finished){
     var win = window.open("","_self")
     win.document.write("<h1>RESULTADO</h1>")
     win.document.write(this.props.score)
    }

    return (
      <div className="App">

        <div>
          <Title/>
        </div>

        <Game 
          questions = {this.props.questions}
          currentQuestion = {this.props.currentQuestion}
          onClick={this._onClick}
          question={this.props.questions[this.props.currentQuestion]}
          onQuestionAnswer={(answer) =>{
            this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
          }}
        />

      </div>
    );
  }
}

function mapStatetoProps(state) {
    return {
        ...state
    };
}

export default connect(mapStatetoProps)(App)