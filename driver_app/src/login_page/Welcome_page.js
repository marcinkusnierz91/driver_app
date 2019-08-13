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
                <div className="row signin-row">
                    <Link to='/login'>
                        <div className="col-4 signin-col">
                            <span>Zaloguj się</span>
                        </div>
                    </Link>
                </div>
                <div className="row signup-row">
                    <Link to='/signin'>
                        <div className="col-4 signup-col">
                            <span>Zarejestruj się</span> 
                        </div>
                    </Link>
                </div>
            </section>
        )
    }
}

export default WelcomePage;