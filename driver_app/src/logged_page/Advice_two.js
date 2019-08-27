import React, {Component} from 'react';
import DriverLogo from '../login_page/Driver_logo';



class AdviceTwo extends Component {
    render() {
        return (
            <section className='grid-container mainContainer'>
                <div className="row">
                    <div className="col-3 logged-name">
                        {/* <Name 
                        col={3} 
                        email={name}
                        changeName={this.onChangeName}
                        /> */}
                    </div>
                    <div className="col-4 logged-logo">
                        <DriverLogo col={4} />
                    </div>
                    <div className="col-3 ">
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 advice-title__col">
                        <h3>Znaki</h3>
                    </div>
                </div>
                <div className="row advice-image__row">
                    <div className="col-9 advice-image__col advice advice2-image__col"></div>
                </div>
                <div className="row advice-lvl__row">
                    <div className="col-9 advice-lvl__col">
                        <span>Poziom początkujący</span>
                    </div>
                </div>
                <div className="row advice-info__row">
                    <div className="col-9 advice-info__col">
                        <span>5 przydatnych zasad dotyczących znaków</span>
                    </div>
                </div>
                <div className="row advice-list__row">
                    <div className="col-9 advice-list__col">
                        <ul>
                            <li>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, nemo similique!</li>
                            <li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, omnis delectus.</li>
                            <li>3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, facere eum?</li>
                            <li>4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, nisi ipsa?</li>
                            <li>5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, fugiat consectetur.</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}


export default AdviceTwo;


