import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Title from './Title'
import Buttons from './Buttons'
import Info from './Info'

const url = 'https://course-api.com/react-tabs-project'

//<i class="fas fa-tasks"></i>

function App() {

    const [jobs , setJobs] = useState([]);
    const [value , setValue] = useState(0);
    const [loading , setLoading] = useState(true);

    const generateProps = (value)=>{
        return (
            {   company : jobs[value].company,
                dates : jobs[value].dates,
                duties : jobs[value].duties,
                title : jobs[value].title
            }
        );
    }

    const fetchData = async() => {
        const response = await fetch(url);
        const fetchedJobs = await response.json();
        setJobs(fetchedJobs);
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    } , []);

    if (loading){
        return (<Loading />);
    }
    return (
        <section className = 'section'>
            <Title />
            <div className = 'jobs-center'>
                <Buttons jobs = {jobs}  value = {value} setValue = {setValue}/>
                <Info props = {generateProps(value)} />
            </div>
        </section>
    );

}

export default App
