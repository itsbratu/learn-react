import React, { useState } from 'react';

const Tour = ({id , image , info , price , name , deleteTour}) => {

    const [readMore , setReadMore] = useState(false);

    const readMoreHandler = () =>{
      setReadMore(!readMore);
    }

    return(
      <article className='single-tour'>
        <img src = {image} alt = {name}/>
        <footer>
          <div className = 'tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0,200)}...`}
            <button onClick = {readMoreHandler}>
              {readMore ? "Show less!" : "Read more!"}
            </button>
          </p>
          <button type = 'button' className = 'delete-btn' onClick = {()=>deleteTour(id)}>
            Not interested!
          </button>
        </footer>
      </article>
    );

};

export default Tour;
