import React from 'react'

const TextArea = ({textInput})=>{
    return(
        <article className = 'lorem-text'>
            {textInput.map((curr_text , index)=>{   
                return (
                    <p key = {index}>{curr_text}</p>
                );
            })}
        </article>
    );
}

export default TextArea;