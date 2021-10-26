import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value , handler);
  const [text,setText] = useState('Random title!');

  const clickHandler = () =>{
    if (text == 'Random title!'){
      setText('Hello world!');
    }
    else{
      setText('Random title!');
    }
  }

  return(
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick = {clickHandler}>
        Change random number!
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
