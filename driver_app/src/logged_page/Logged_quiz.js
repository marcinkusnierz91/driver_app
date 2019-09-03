import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionBox from './Question_box';
import Result from './Result';


const bgColor = {grey: '#3F3E42'}


class LoggedQuiz extends Component {
    state = {
        score: 0,
        responses: 0,
    }

    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5 
        })
    }

    playAgain = () => {
        this.setState({
            score: 0,
            responses: 0,
        })
    }
    
    
    render() {
        // console.log(this.props.quiz)
        
        return (

            
            <div className="row quiz-row">
                <div className="col-9 quiz-col">
                    {this.props.quiz.length > 0 &&
                    this.state.responses < 5 && 
                    this.props.quiz.map(({question, answers, correct, questionId}) => {
                    return (
                        <QuestionBox question={question}
                        options={answers}
                        key={questionId}
                        selected={answer => this.computeAnswer(answer, correct)}/>
                        
                    )
                    })}
                    
                    {this.state.responses === 5 ? (
                        <Result score={this.state.score} playAgain={this.playAgain}/>
                    ) : null}
                        
                </div>
            </div>
            
            

        )
    }
}




const mapStateToProps = (state) => {
    return {
      quiz: state.quiz,
    }
  }


export default connect(mapStateToProps)(LoggedQuiz);