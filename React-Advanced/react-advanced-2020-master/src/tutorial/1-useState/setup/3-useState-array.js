import React from 'react';
import {data} from '../../../data';

const UseStateArray = () => {
  const [people , setPeople] = React.useState(data);

  const clearPeople = () =>{
    setPeople([]);
  }

  const removeItem = (id) =>{
    let newPeople = people.filter((person) =>person.id != id);
    setPeople(newPeople);
  }

  const addAll = () =>{
    setPeople(data);
  }

  return (
  <>
    {people.map((person) =>{
      const {id, name} = person;
      return(
        <div key={id} className='item'>
          <h4>{name}</h4>
          <button className='btn' onClick = {() => removeItem(id)}> 
            Remove person!
          </button>

        </div>
      );
    })}
    <button type='button' className='btn' onClick = {clearPeople}>
      Clear items!
    </button>
    <button type = 'button' className='btn' onClick = {()=> addAll()}>
      Add all!
    </button>
  </>
  );
};

export default UseStateArray;