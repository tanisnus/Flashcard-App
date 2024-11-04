import React, {useState} from 'react';


// flashcard component


const Flashcard =({question, answer}) => {


    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flashcard" onClick={flipCard}>
            {!isFlipped ? 
            (
                <div className="front">
                    <h2>{question}</h2>
                </div>

            ) : 
            (
                <div className="back">
                    <p> {answer} </p>
                </div>
            )} 

        </div>
    );

};

export default Flashcard;