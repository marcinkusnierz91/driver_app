import React, {Component} from 'react';
import ReactSearchBox from 'react-search-box'
import {connect} from 'react-redux';



class LoggedFAQ extends Component {
    render() {
        // const faqs = this.props;
        console.log(this.props)
        return (
            <>
            <div className="row faq-search__row">
                <div className="col-5 faq-search__col">
                    <ReactSearchBox 
                    data= {this.faqs}
                    inputBoxHeight='30px;'
                    placeholder='Szukaj...'
                    callback={record => console.log(record)}
                    />
                </div>
            </div>
            {this.props.faqs.map(faq => {
                return ( 
                    <div className="row faq-row" key={faq.id}>
                        <div className="col-9 faq-col">
                            <h5>{faq.id}. &nbsp; {faq.question}</h5>
                            <h4>{faq.answer}</h4>
                        </div>
                    </div>
                ) 
            })}
            </>
        )
    }
}



const mapStateToProps = (state) => {
    return {
      faqs: state.faqs,
      
    }
  }

export default connect(mapStateToProps)(LoggedFAQ);