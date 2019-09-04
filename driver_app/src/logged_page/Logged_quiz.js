import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionBox from './Question_box';
import Result from './Result';





class LoggedQuiz extends Component {
    state = {
        score: 0,
        responses: 0,
        questions: this.props.quiz
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
        // this.props.quiz.sort(() => 0.5 - Math.random()).slice(0,5);
    }
    
    
    render() {
        // console.log(this.props.quiz)
        // let quizQuestions = this.props.quiz.sort(() => 0.5 - Math.random()).slice(0,5);
        
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
      quiz: state.quiz.slice(0,5),
    }
  }


export default connect(mapStateToProps)(LoggedQuiz);