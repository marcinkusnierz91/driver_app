import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class WeeklyAdvice extends Component {
    render() {
        return (
            
            
                <div className="row weekly-advice__row">
                    <Link to='/logged-weekly-advice'>
                    <div className="col-9 weekly-advice__col" >
                        <div className="row">
                            <div className="col-5">
                                <h3>Porada tygodnia</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <h2>Prowadzenie na zakrętach</h2>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            
            
        )
    }
}

export default WeeklyAdvice;