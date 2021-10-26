import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {

  const [questions , setQuestions] = useState(data);

  return (
    <main>
      <div className = 'container'>
        <h3>Questions And Cool Answears!</h3>
        <section className = 'info'>
            {questions.map((question)=>{
              const {id , title , info} = question;
              return (
                <SingleQuestion id = {id} {...question} />
              );
            })}
        </section>
      </div>
    </main>
  );
}

export default App;
