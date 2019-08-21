import React, {Component} from 'react';
import Login from './Login'
import DriverLogo from './Driver_logo';




class LoginPage extends Component {
    
    

    render() {
        
        return(
            <section className='grid-container loginContainer'>
                <DriverLogo/>
                <div className="row login-row">
                    <div className="col-6 login-col">
                        <h2>Zaloguj się</h2>
                        <Login/>
                    </div>
                </div>
                
                
                
                
            </section>
        )
    }
}

export default LoginPage;