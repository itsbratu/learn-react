import React , {useState , useEffect, useCallback} from 'react'
import data from './data'

const Frame = ({people , index , setIndex})=>{

    return (
        <div className = 'section-center'>
            {people.map((person , personIndex)=>{
                
                const {id , image , name , title , quote} = person;
                var articleType = 'nextSlide';
                if ( personIndex === index ){
                    articleType = 'activeSlide';
                }
                
                if ( ( personIndex ===  - 1 && index === 0 ) || ( personIndex === index - 1 )){
                    articleType = 'lastSlide';
                }

                return (
                    <article id = {id} className = {articleType}>
                        <img src = {image} alt = {name} class = 'person-img'></img>
                        <h4>{name}</h4>
                        <p className = 'title'>{title}</p>
                        <p className = 'text'>
                            {quote}
                        </p>
                        <i class="fas fa-quote-right"></i>
                        <button type = 'button' className = 'prev' onClick = {()=>setIndex(index-1)}>
                            <i class="fas fa-arrow-alt-circle-left"></i>    
                        </button>
                        <button type = 'button' className = 'next' onClick = {()=>setIndex(index+1)}>
                            <i class="fas fa-arrow-alt-circle-right"></i>    
                        </button>
                    </article>
                );
            })}
        </div>
    );
}

export default Frame;