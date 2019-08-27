import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import './App.scss';
import WelcomePage from './login_page/Welcome_page';
import LoginPage from './login_page/Login_page';
import SignupPage from './login_page/Signup_page';
import LoggedMainPage from './logged_page/Logged_main_page'
import WeeklyAdvice from './logged_page/Weekly_advice';
import AdviceOne from './logged_page/Advice_one';
import AdviceTwo from './logged_page/Advice_two';
import AdviceThree from './logged_page/Advice_three';
import AdviceFour from './logged_page/Advice_four';
import AdviceFive from './logged_page/Advice_five';

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
            <Route path='/logged-weekly-advice' component={AdviceFive} />
            <Route path='/logged-advice1' component={AdviceOne} />
            <Route path='/logged-advice2' component={AdviceTwo} />
            <Route path='/logged-advice3' component={AdviceThree} />
            <Route path='/logged-advice4' component={AdviceFour} />
          </Switch>
          
          
        </div>
       
      </BrowserRouter>
    )
  }
}

export default App;
