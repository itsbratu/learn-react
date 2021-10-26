import React from 'react'

const Header = ({color , setColor , handleSubmit})=>{
    return(
        <section className = "container">
        <h3>Hex color generator!</h3>
        <form onSubmit = {handleSubmit}>
            <input type = "text" name = "text" value = {color} onChange = {(e)=>{setColor(e.target.value)}} placeholder = "#ffffff"/>
            <button type = "submit" className = 'btn'>GENERATE!</button>
            </form>
        </section>
    );
}

export default Header;