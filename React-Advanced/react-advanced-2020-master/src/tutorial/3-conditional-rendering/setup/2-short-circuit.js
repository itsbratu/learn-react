import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

// || -> first truly value 
// && -> first falsy value / last value of the circuit

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text , setText] = useState('Cool name!');
  const [isError , setIsError] = useState(false);
  // const firstValue = text || 'hello world!';
  // const secondValue = text && 'hello world!';


  const logicalHandler = () =>{
    setIsError(!isError);
  }

  return (
    <>
      <h1>Mini logical circuit!</h1>
      <button className = 'btn' onClick = {logicalHandler}>
        Toggle error!
      </button>
      {isError ? <h1>Error...</h1> : <h2>Yey...</h2>}
    </>
  ); 
};

export default ShortCircuit;
