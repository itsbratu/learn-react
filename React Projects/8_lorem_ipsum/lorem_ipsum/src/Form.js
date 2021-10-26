import React from 'react'

const Form = ({changeHandler , number , setNumber})=>{
    return (
    <form className = 'lorem-form' onSubmit = {changeHandler}>
        <label htmlFor = "amount">
        Paragraphs : 
        </label>
        
        <input type = 'number' name = 'amount' id = 'amount' value = {number} onChange = {(e)=>setNumber(e.target.value)}/>
        <button type="submit" className="btn">
        GENERATE!
        </button>
    </form>
    );
}

export default Form;