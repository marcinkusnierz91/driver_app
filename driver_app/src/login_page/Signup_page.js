import React, {Component} from 'react';


import Signup from './Signup';
import DriverLogo from './Driver_logo';


class SignupPage extends Component {
    
    
    render() {
        
        return(
            <section className='grid-container loginContainer'>
                <DriverLogo />
                
                <div className="row signup-row">
                    <div className="col-6 signup-col">
                        <h2>Zarejestruj się</h2>
                        <Signup/>
                    </div>
                </div>

                
                
                
            </section>
        )
    }
}

export default SignupPage;