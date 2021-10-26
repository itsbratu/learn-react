import React from 'react'

const Info = ({props})=>{
    return(
    <div className = 'job-info'>
        <h3>{props.title}</h3>
        <h4>{props.company}</h4>
        <p>{props.dates}</p>
        <div className = 'job-desc'>
            {props.duties.map((duty)=>{
                return(
                    <>
                        <i class="fas fa-tasks"></i>
                        <p>{duty}</p>
                    </>
                );
            })}
        </div>
    </div>
    );
}

export default Info;