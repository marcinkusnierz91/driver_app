import React, {Component} from 'react';
import Login from './Login'
import { Link } from 'react-router-dom';



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
                <div className="row open-row">
                    <Link to='/logged/'>
                        <div className="col-4 open-col">
                            <span>W drogę!</span>
                        </div>
                    </Link>
                </div>
                <div className="row sign-row">
                    <div className="col-6">
                        <Login/>
                    </div>
                </div>
            </section>
        )
    }
}

export default LoginPage;