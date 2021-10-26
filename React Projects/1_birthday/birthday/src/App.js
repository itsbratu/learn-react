import React, { useState } from 'react';
import data from './Data';
import List from './List';

//section-container

function App() {
  const [people , setPeople] = useState(data);

  const deleteHandler = () =>{
    setPeople([]);
  }

  const fillHandler = () =>{
    setPeople(data);
  }

  return(
    <main>
      <section className = 'container'>
        <h2>{people.length} current!</h2>
        <List persons = {people}/>
        <button id = "deleteButton" onClick = {deleteHandler}>
          Delete persons!
        </button>
        <button id = "fillButton" onClick = {fillHandler}>
          Fill persons!
        </button>
      </section>
    </main>
  );

}

export default App;
