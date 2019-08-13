import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import './App.scss';
import WelcomePage from './login_page/Welcome_page';
import LoginPage from './login_page/Login_page'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/login' component={LoginPage} />
            
          </Switch>
          
          
        </div>
       
      </BrowserRouter>
    )
  }
}

export default App;
