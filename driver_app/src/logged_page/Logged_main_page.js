import React, {Component} from 'react';
import DriverLogo from '../login_page/Driver_logo';
import Name from './Name';


class LoggedMainPage extends Component {
    
    state = {
        email: '',
    }

    onChangeName = email => {
        this.setState({
            email: email,
        });
    }
    
    render() {
        return (
            <section className='grid-container mainContainer'>
                <div className="row">
                    <div className="col-3 logged-name">
                        <Name 
                        col={3} 
                        email={this.state.email}
                        changeName={this.onChangeName}
                        />
                    </div>
                    <div className="col-4 logged-logo">
                        <DriverLogo col={4} />
                    </div>
                    <nav className="col-3 ">
                        
                    </nav>
                </div>
            </section>
        )
    }
}

export default LoggedMainPage;