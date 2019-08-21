import React, {Component} from 'react';

class DriverLogo extends Component {
    render() {
        return (
        <>    
            <div className="row title-row">
                <div className={`col-${this.props.col} title-col`}>
                    <span>Driver</span>
                </div>
            </div>
            <div className="row description-row">
                <div className={`col-${this.props.col} description-col`}>
                    <span>Edukacyjna aplikacja samochodowa</span>
                </div>
            </div>
        </>
        )
    }
}



export default DriverLogo;