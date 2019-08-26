import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';


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
                        <div className="col-4 advice">
                            <h3>Zasady ruchu drogowego</h3>
                            <h5>początkujący</h5>
                        </div>
                        <div className="col-4 advice">
                            <h3>Znaki</h3>
                            <h5>początkujący</h5>
                        </div>
                        <div className="col-4 advice">
                            <h3>Techniki hamowania</h3>
                            <h5>zaawansowany</h5>
                        </div>
                        <div className="col-4 advice">
                            <h3>Bezpieczna jazda</h3>
                            <h5>początkujący</h5>
                        </div> 
                    </div>
                </div>
                </ReactSwipe>

        )
    }
}

export default LoggedAdvices