import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import { Link } from 'react-router-dom';




class LoggedAdvices extends Component {
    
    
    render() {
        let reactSwipeEl;   
        return(
            <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: false }}
                    ref={el => (reactSwipeEl = el)}
                >
                <div className="row advices-row">
                
                    <div className="col-9 advices-col">
                        
                    <Link to='/logged-advice1' className='col-4 advice'>
                        
                            <h3>Zasady ruchu drogowego</h3>
                            <h5>początkujący</h5>
                        
                    </Link>
                    <Link to='/logged-advice2' className="col-4 advice">
                        
                            <h3>Znaki</h3>
                            <h5>początkujący</h5>
                        
                    </Link>
                    <Link to='/logged-advice3' className="col-4 advice">
                        
                            <h3>Techniki hamowania</h3>
                            <h5>zaawansowany</h5>
                        
                    </Link>
                    <Link to='/logged-advice4' className="col-4 advice">
                        
                            <h3>Bezpieczna jazda</h3>
                            <h5>początkujący</h5>
                        
                    </Link>
                    </div>
                    
                </div>
                </ReactSwipe>

        )
    }
}

export default LoggedAdvices