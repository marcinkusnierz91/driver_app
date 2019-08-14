import React, {Component} from 'react';


import Signup from './Signup';


class SignupPage extends Component {
    
    
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