import React from 'react';

const Result = ({score, playAgain}) => {
    return (
    <div className="row result-row">
        <div className="col-9 result-col" >
            <h2>Brawo! Zdobyta ilość punktów to {score} na 5 możliwych.</h2>
            <button className='playBtn' onClick={playAgain}>Zagraj jeszcze raz</button>
        </div>
        
    </div>
    )
}

export default Result