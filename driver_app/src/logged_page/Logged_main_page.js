import React, {Component} from 'react';
import DriverLogo from '../login_page/Driver_logo';
import Name from './Name';
import {connect} from 'react-redux';
import LoggedAdvices from './Logged_advices';
import LoggedQuiz from './Logged_quiz';
import WeeklyAdvice from './Weekly_advice';







class LoggedMainPage extends Component {
    
    state = {
        email: '',
        page: 1,
    }

    onChangeName = email => {
        this.setState({
            email: email,
        });
    }
    
    handlePage1 = (event) => {
        this.setState({
            page: 1,
        })
        // console.log()
    }
    handlePage2 = () => {
        this.setState({
            page: 2,
        })
    }
    handlePage3 = () => {
        this.setState({
            page: 3,
        }) 
    }

    render() {
        const { accounts } = this.props;
        const name = accounts.map(name => name.name);
        let page;

        if(this.state.page == 1) {
            page = <LoggedAdvices/>;
        } else if (this.state.page == 2) {
            page = <LoggedQuiz/>
        } else if (this.state.page == 3) {
            page = null
        }

        return (
            <section className='grid-container mainContainer'>
                <div className="row">
                    <div className="col-3 logged-name">
                        {/* <Name 
                        col={3} 
                        email={name}
                        changeName={this.onChangeName}
                        /> */}
                    </div>
                    <div className="col-4 logged-logo">
                        <DriverLogo col={4} />
                    </div>
                    <div className="col-3 ">
                    </div>
                </div>
                <WeeklyAdvice />

                <nav className="row nav-row">
                    <div className="col-9 nav-col">
                        <div className="col-3" onClick={this.handlePage1}  >
                            <span>Porady</span>
                        </div>
                        <div className="col-3" onClick={this.handlePage2}  >
                            <span>Quiz</span>
                        </div>
                        <div className="col-3" onClick={this.handlePage3} >
                            <span>FAQ</span>
                        </div>
                    </div>
                </nav>

                {page}
                
                
                
                
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      accounts: state.accounts
    }
  }

export default connect(mapStateToProps)(LoggedMainPage);