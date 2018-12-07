import { combineReducers } from 'redux';
import {QUESTION_ANSWER} from './actions';
import {CHANGE_QUESTION} from './actions';
import {INIT_QUESTION} from './actions';
import {SUBMIT} from './actions';

function score(state=0,action={}) {
    switch (action.type) {
        case SUBMIT:
            let res=0
            let questions=action.payload.questions
            let i=0
            for(i;i<questions.length-1;i++){
                if(questions[i].answer.toString().toLowerCase() === questions[i].userAnswer.toString().toLowerCase()){
                    res+=1
                }
            }
            return res
        default:
            return state;
    }
}

function finished(state=false,action={}) {
    switch (action.type) {
        case SUBMIT:
            return true
        default:
            return state;
    }
}

function currentQuestion(state=0,action={}) {
    switch (action.type) {
        case CHANGE_QUESTION:
            let new_state;
            if(action.payload.index === "Siguiente"){
                new_state=state+1;
            }else if(action.payload.index === "Atras"){
                new_state=state-1;
            }
            return new_state
        default:

            return state;
    }
}

function questions(state=[],action={}) {
    switch (action.type) {
        case QUESTION_ANSWER:
            return state.map((question,i) =>{
                return {
                    ...question,
                    userAnswer: action.payload.index === i ? action.payload.answer : question.userAnswer
                }
            })
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;