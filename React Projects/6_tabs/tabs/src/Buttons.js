import React from 'react'

const Buttons = ({jobs , value , setValue})=>{
    return(
        <div className = 'btn-container'>
            {jobs.map((job , index)=>{
                return (
                    <button type = 'button' className = {`job-btn ${index === value && 'active-btn'}`} onClick = {() => {setValue(index)}}>
                        {job.company}
                    </button>
                );
            })}
        </div>
    );
}

export default Buttons;