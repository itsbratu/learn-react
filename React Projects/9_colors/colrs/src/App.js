import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Header from './Header'

import Values from 'values.js'

function App() {

  const [color , setColor] = useState('');
  const [colorList , setColorList] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();

    try{
      const colorsPalette = new Values(color).all();
      setColorList(colorsPalette);
      console.log(colorsPalette);
    }catch(error){
      console.log(error);
      setColor('');
      alert("Wrong color hex code!");
    }
  }

  return (
    <>
      <Header color={color} setColor = {setColor} handleSubmit = {handleSubmit}/>
      <section className = "colors">
        {colorList.map((color , index)=>{
          return(
            <SingleColor rgb = {color.rgb} weight = {color.weight} index = {index} />
          );
        })};
      </section>
    </>
  );
}

export default App
