import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class WelcomePage extends Component {
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
                <div className="row login-link-row">
                    <Link to='/login'>
                        <div className="col-4 login-link-col">
                            <span>Zaloguj się</span>
                        </div>
                    </Link>
                </div>
                <div className="row signup-link-row">
                    <Link to='/signup'>
                        <div className="col-4 signup-link-col">
                            <span>Zarejestruj się</span> 
                        </div>
                    </Link>
                </div>
            </section>
        )
    }
}

export default WelcomePage;