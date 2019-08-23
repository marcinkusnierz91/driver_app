import React, {Component} from 'react';
import DriverLogo from '../login_page/Driver_logo';
import Name from './Name';
import {connect} from 'react-redux';


class LoggedMainPage extends Component {
    
    state = {
        email: '',
    }

    onChangeName = email => {
        this.setState({
            email: email,
        });
    }
    
    render() {
        const { accounts } = this.props;
        const name = accounts.map(name => name.name)

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
                <div className="row weekly-advice__row">
                    <div className="col-9 weekly-advice__col">
                        <div className="row">
                            <div className="col-5">
                                <h3>Porada tygodnia</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h2>Prowadzenie na zakrętach</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="row nav-row">
                    <div className="col-9 nav-col">
                        <div className="col-3">
                            <span>Porady</span>
                        </div>
                        <div className="col-3">
                            <span>Quiz</span>
                        </div>
                        <div className="col-3">
                            <span>FAQ</span>
                        </div>
                    </div>
                </nav>

                <div className="row ">
                    <div className="col-5 advices-col">
                        <div className="col-4 advice">

                        </div>
                        <div className="col-4 advice">

                        </div>
                    </div>
                    <div className="col-5 advices-col">
                        <div className="col-4 advice">

                        </div>
                        <div className="col-4 advice">

                        </div>
                    </div>
                </div>
                
                
                
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