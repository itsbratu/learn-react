import React, { useState } from 'react';

const Question = ({title , info}) => {

    const [isExtended , setIsExtended] = useState(false);

    const stateChanger = ()=>{
        setIsExtended(!isExtended);
    }
    
    return (
        <article className = 'question'>
            <header>
                <h4>{title}</h4>
                <button type = 'button' className = 'btn' onClick = {stateChanger}>
                    {isExtended ? <i class="fas fa-minus-circle"></i> : <i class="fas fa-plus-circle"></i>}
                </button>
            </header>
            {isExtended && <p>{info}</p>}
        </article>
    );
    
    
};

export default Question;
