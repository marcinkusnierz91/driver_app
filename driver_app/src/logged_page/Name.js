import React, {Component} from 'react';


class Name extends Component {
    render() {
        return (
            <>
            <div className={`col-${this.props.col} hello-col`}>
                <span>Witaj</span>
            </div> 
            <div className={`col-${this.props.col}`}>
                <span>{this.props.email}</span>
            </div> 
            </>
        )
    }
}

export default Name