import React from 'react';
//article-person

const List = ({persons}) => {

  return(
    <>
      {persons.map((person)=>{
        const {id , name , age , image} = person;
        return (
          <article className='person' id = {id}>
            <img src = {image} alt = {name}/>
            <div>
              <h2>Name : {name}</h2>
              <h2>Age : {age}</h2>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
