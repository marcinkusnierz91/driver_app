import React, {Component} from 'react';
import ReactSearchBox from 'react-search-box'
import {connect} from 'react-redux';




class LoggedFAQ extends Component {
    state = {
        search: '',
    }
    

    updateChange = (event) => {
        this.setState({
            search: event.target.value.substr(0, 20),
        })
    }

    render() {

        const filteredFaqs = this.props.faqs.filter(
            (faq) => {
                return (
                faq.question.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || 
                faq.answer.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
                )
            }
        );
        
        const commentsQuantity = this.props.faqs.map(element => {
            return (element.id)
        })
        const commentsSum = commentsQuantity.reverse()[0]
        
        return (
            <>
            <div className="row faq-sum-row">
                <div className="col-9 faq-sum-col">
                    <h3>Zadawane pytania ({commentsSum})</h3>
                </div>
            </div>
            <div className="row faq-search__row">
                <div className="col-5 faq-search__col">
                    
                    <input placeholder='Szukaj...' type="text" value={this.state.search}  onChange={this.updateChange} className='searchInput'/>
                </div>
            </div>
            
            {filteredFaqs.map(faq => {
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