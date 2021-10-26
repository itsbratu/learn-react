import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {

  const [value , setValue] = useState(0);

  const increaseValue = () =>{
    setValue(value+1);
  };

  useEffect(()=>{
      if(value > 0){
          document.title = `New messages(${value})`;
      }
  },[value]);
  
  return(
    <>
      <h1>{value}</h1>
      <button className = 'btn' onClick = {increaseValue}>
        Increase!
      </button>
    </>
  );
};

export default UseEffectBasics;
