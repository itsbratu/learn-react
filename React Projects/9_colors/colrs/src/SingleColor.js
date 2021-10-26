import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb , weight , index}) => {

  const altFormat = rgb.join(',');  

  const copyHexCode = ()=>{
    navigator.clipboard.writeText(rgbToHex(rgb[0] ,rgb[1],rgb[2]));
    alert("Hex code copied succesfully!");
  }

  return (
    <article className = {`color ${index > 10 && 'color-light'}`} style = {{backgroundColor : `rgb(${altFormat})` }} onClick = {copyHexCode}>
      <p className = 'percent-value'>{weight}%</p>
      <p className = 'color-value'>{rgbToHex(rgb[0] ,rgb[1],rgb[2])}</p>
    </article>
  );
}

export default SingleColor
