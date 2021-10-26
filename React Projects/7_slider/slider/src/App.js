import React, { useState, useEffect } from 'react';
import data from './data'
import Title from './Title'
import Frame from './Frame'

{/* <i class="fas fa-quote-right"></i>
<i class="fas fa-arrow-alt-circle-left"></i>
<i class="fas fa-arrow-alt-circle-right"></i> */}

function App() {

    const [people , setPeople] = useState(data);
    const [index , setIndex] = useState(0); 
    
    useEffect(()=>{
        const lastIndex = people.length - 1;
        if(index < 0){
            setIndex(lastIndex);
        }else if(index > lastIndex){
            setIndex(0);
        }
    },[index , people]);
    
    useEffect(()=>{
        const intervalTime = setInterval(()=>{
            setIndex(index+1);
        } , 3000);
        return () =>clearInterval(intervalTime);
    } , [index]);

    return (
        <section className = 'section'>
            <Title />
            <Frame people = {people} index = {index} setIndex = {setIndex}/>
        </section>
    );
}

export default App;
