import React, {Component} from 'react';
import { totalmem } from 'os';
import {connect} from 'react-redux';
import { NONAME } from 'dns';

class LoggedQuiz extends Component {
    state = {
        nr: 0,
        total: this.props.quiz.length,
        showBtn: false,
        questionAnswered: false,
        score: 0,
        displayPopup: 'flex'
        
    }

    pushData = (nr) => {
        let {quiz} = this.props
        this.setState({
            question: quiz[nr].question,
            answers: [quiz[nr].answers[0], quiz[nr].answers[1],quiz[nr].answers[2],quiz[nr].answers[3] ],
            correct: quiz[nr].correct,
            nr: this.state.nr + 1
        })
        
    }

    componentWillMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }
    
    nextQuestion = () => {
        let {nr, total, score} = this.state;
        if (nr === total) {
            this.setState({
                displayPopup: 'flex'
            })
        } else {
            this.pushData(nr);
            this.setState({
                showBtn: false,
                questionAnswered: false,
            })
        }
    }

    handleShowBtn = () => {
        this.setState({
            showButton: true,
            questionAnswered: true,
        })
    }

    handleQuizStart = () => {
        this.setState({
            displayPopup: 'none',
            nr: 1,
        })
    }

    handleIncreaseScore = () => {
        this.setState({
            score: this.state.score + 1
        })
    }

    
    render() {
        let {nr, total, showBtn, questionAnswered, score, displayPopup} = this.state;
        return (

            <>
                <div className="row quiz-row">
                    <div className="col-9 quiz-col">
                        <h2>Praca w toku...</h2>
                    </div>
                </div>

            </>
           

        )
    }
}


const mapStateToProps = (state) => {
    return {
      quiz: state.quiz,
    }
  }


export default connect(mapStateToProps)(LoggedQuiz);
