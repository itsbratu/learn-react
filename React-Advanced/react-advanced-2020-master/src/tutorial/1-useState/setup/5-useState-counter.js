import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value , setValue] = useState(0);

  const incrementHandler = () =>{
    setValue(value+1);
  }

  const decrementHandler = () =>{
    setValue(value-1);
  }

  const resetHandler = () =>{
    setValue(0);
  }

  const complexIncrease = () =>{
    setTimeout(() => {  
        setValue((prevState)=>{
          return prevState +1;
        });
    },2000);
  }


  return (
      <>  
        <section style = {{margin : '4rem 0'}}>
          <h2>Regular counter!</h2>
          <h1>{value}</h1>
          <button className='btn' onClick = {incrementHandler}>
            Increase!
          </button>
          <button className='btn' onClick = {decrementHandler}>
            Decrease!
          </button>
          <button className='btn' onClick = {resetHandler}>
            Reset!
          </button>
        </section>

        <section style = {{margin : '4rem 0'}}>
          <h2>Complex counter!</h2>
          <h1>{value}</h1>
          <button className = 'btn' onClick = {complexIncrease}>
            Increase later!
          </button>
        </section>

      </>
  );
};

export default UseStateCounter; 
