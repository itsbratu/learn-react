import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName , setFirstName] = useState('');
  const [email , setEmail] = useState('');
  const [people , setPeople] = useState([]);

  const peopleHandler = () =>{
    console.log(people);
  }

  const checkData = (name , email) =>{
    const reName = /^[a-zA-Z]+ [a-zA-Z]+$/
    var reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if((reName.test(name)) == false && (reEmail.test(email) == false)){
      alert('Atentie , nume si email invalide!');
      return false;
    }else if (reName.test(name) == false){
      alert('Atentie , nume invalid!');
      return false;
    }else if (reEmail.test(email) == false){
      alert('Atente , email invalid!');
      return false;
    }
    return true;
  }

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    if(checkData(firstName , email) == true){
      const newPerson = {firstName , email};
      setPeople((people)=>{
        return [...people , newPerson];
      });
      setFirstName('');
      setEmail('');
    }
  };

  return (
    <article>
      <form className = "form" >
        <div className = "form-control">
          <label htmlFor = "firstName">
            Name : 
          </label>
          <input type = "text" id="firstName" name = "firstName" value = {firstName} onChange = {(e)=>{setFirstName(e.target.value)}}/>
        </div>
        <div className = "form-control">
          <label htmlFor = "email">
            Email : 
          </label>
          <input type = "text" id="email" name = "email" value = {email} onChange = {(e)=>{setEmail(e.target.value)}}/>
        </div>
        <button type = "submit" onClick = {handleSubmit}>
          Add person!
        </button>
      </form>
      {
        people.map((person , index)=>{
          const {id , firstName , email} = person;
          return (
            <div>
              <h4 className = 'item'>{firstName}  {email}</h4>
            </div>
          );
        })
      }
    </article>
  );
};

export default ControlledInputs;
