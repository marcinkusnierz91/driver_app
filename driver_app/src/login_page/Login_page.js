import React, {Component} from 'react';
import Login from './Login'




class LoginPage extends Component {
    
    
    render() {
        
        return(
            <section className='grid-container loginContainer'>
                <div className="row title-row">
                    <div className="col-7 title-col">
                        <span>Driver</span>
                    </div>
                </div>
                <div className="row description-row">
                    <div className="col-7 description-col">
                        <span>Edukacyjna aplikacja samochodowa</span>
                    </div>
                </div>
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