import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import './App.scss';
import WelcomePage from './login_page/Welcome_page';
import LoginPage from './login_page/Login_page';
import SignupPage from './login_page/Signup_page';
import LoggedMainPage from './logged_page/Logged_main_page'
import WeeklyAdvice from './logged_page/Weekly_advice';

import {connect} from 'react-redux';



class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <Route path='/logged' component={LoggedMainPage} />
            {this.props.advices.map(advice => {
              return <Route key={advice.id} path={advice.path} component={advice.component} />
            })}
          </Switch>
          
          
        </div>
       
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    advices: state.advices
  }
}

export default connect(mapStateToProps)(App);
