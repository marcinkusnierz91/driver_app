import React, {useState} from 'react';


const QuestionBox = ({question, options}) => {
    const [answer, setAnswer, selected] = useState(options)
    console.log(answer, setAnswer, selected);
    
    return (
        <div className="row question-row">
            <div className="col-9 question-col">
                {question}
                
            </div>
            <div className="row answer-row">
                <div className="col-9 answer-col">
                    {answer.map((text, index) => {
                    return (
                        <button  key={index} className='col-4 answerBtn' onClick={() => {
                            setAnswer([text]);
                            // selected(text);
                        }}>{text}</button>
                    )
                    })}
                </div>
            </div>
            
        </div>
    )
}


export default QuestionBox;