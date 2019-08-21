import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import './App.scss';
import WelcomePage from './login_page/Welcome_page';
import LoginPage from './login_page/Login_page';
import SignupPage from './login_page/Signup_page';
import LoggedMainPage from './logged_page/Logged_main_page'

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
          </Switch>
          
          
        </div>
       
      </BrowserRouter>
    )
  }
}

export default App;
