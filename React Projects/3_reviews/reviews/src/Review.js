import React, { useState } from 'react';
import people from './data';

const Review = () => {

    const [index , setIndex] = useState(0);
    const {name , job , image , text} = people[index];

    function getRandomInt(min , max){
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max-min) + min);
    }

    const prevHandler = ()=>{
        if(index == 0){
            setIndex(people.length-1);
        }else{
            setIndex(index-1);
        }
    }

    const nextHandler = ()=>{
        if(index == people.length-1){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    const randomHandler = ()=>{
        let randomIndex = getRandomInt(0 , people.length);
        while(randomIndex == index){
            randomIndex = getRandomInt(0 , people.length);
        }
        setIndex(randomIndex);
    }

    return (
        <article className = 'review'>
            <div className='img-container'>
                <img src={image} alt={name} className = 'person-img'/>
                <span className = 'quote-icon'>
                    <i class="fas fa-quote-right"></i>
                </span>
            </div>
            <h4 className = 'author'>{name}</h4>
            <p className = 'job'>{job}</p>
            <p className = 'info'>{text}</p>
            <div className = 'button-container'>
                <button className = 'prev-btn' onClick = {prevHandler}> 
                    <i class="fas fa-backward"></i>
                </button>
                <button className = 'next-btn' onClick = {nextHandler}>
                    <i class="fas fa-forward"></i>
                </button>
            </div>
            <button className = 'random-btn' onClick = {randomHandler}>
                Surprise me!
            </button>
        </article>
    );
};  

export default Review;
