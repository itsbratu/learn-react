import React, { useState } from 'react';
import data from './data';
import Title from './Title'
import Form from './Form'
import TextArea from './TextArea';

function App() {

    var [number , setNumber] = useState(0);
    const [textInput , setTextInput] =  useState([]);

    const changeHandler = (e) =>{
        console.log("ok!");
        e.preventDefault();
        let amount = parseInt(number);
        console.log(amount);
        if (amount < 0){
            amount = 0;
        }else if (amount > data.length){
            amount = data.length;
        }
        setTextInput(data.slice(0,amount));
    }

    return (
        <section className = 'section-center'>
            <Title />
            <Form changeHandler = {changeHandler} number = {number} setNumber = {setNumber} />
            <TextArea textInput = {textInput} />
        </section>
    );
}

export default App;
