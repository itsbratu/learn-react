import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours , setTours] = useState([]);
  const [loading , setLoading] = useState(false);

  const deleteTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };


  const fetchData = async() =>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
      return tours;
    }catch(exception){
      setLoading(false);
      console.log(exception);
    }
  }

  useEffect(()=>{
    fetchData();
  },[])

    if(tours.length == 0){
    return (
      <main>
        <div className='title'>
          <h2>Your are our of tours!</h2>
          <button className='btn' onClick = {fetchData}>
            Refresh!
          </button>
        </div>
      </main>
    );
  }

  return(
    <>
      {loading ? <main>
        <Loading />
      </main>
      :
      <main>
        <Tours tours = {tours} deleteTour = {deleteTour}/>
      </main>
      }
    </>
  );
}

export default App
