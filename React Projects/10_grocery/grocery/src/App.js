import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

var globalIndex = 0;

{/* <i class="fas fa-edit"></i>
<i class="fas fa-trash"></i> */}

const getLocalStorage = () =>{
    let list = localStorage.getItem('list');
    if (list){
        return JSON.parse(localStorage.getItem('list'));
    }
    else{
        return [];
    }
}

function App() {
    const [item , setItem] = useState('');
    const [list , setList] = useState(getLocalStorage());
    const [editIndex , setEditIndex] = useState(null);
    const [isEditing , setIsEditing] = useState(false);
    const [alert , setAlert] = useState({show : 'false' , msg : '', type : ''});

    useEffect(()=>{
        localStorage.setItem('list' , JSON.stringify(list));
    } , [list])

    const editItem = (id) =>{
        var matchingItem = list.find((item)=>item.id ===id);  
        setIsEditing(true);
        setEditIndex(id);
        setItem(matchingItem.title);
    }

    const removeItem = (id) =>{
        console.log(id);
        showAlert(true , 'danger' , 'Item removed!');
        setList(list.filter((item)=>item.id != id));
    }

    const clearList = () =>{
        showAlert(true ,'danger' , 'Empty list!');
        setList([]);
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        if(!item){
            showAlert(true , 'danger' , 'Please enter value!')
        }else if(isEditing && item){
            setList(list.map((itemList)=>{
                if(itemList.id === editIndex){
                    return{...item , title : item};
                }
                return itemList;
            }))
        setItem('');
        setEditIndex(null);
        setIsEditing(false);
        showAlert(true , 'succes' , 'Value modified!');
        }else{
            showAlert(true , 'success' , 'Valid item added!')
            const newItem = {id : globalIndex++, title : item};
            setList([...list , newItem]);
            setItem('');
        }
    }

    const showAlert = (show = false,type='',msg='')=>{
        setAlert({show,type,msg});
    }

    return (
        <section className = "section-center">
            <form className = "grocery-form" onSubmit = {submitHandler}>
                {alert.show && <Alert {...alert}  removeAlert = {showAlert} list = {list}/>}
                <h3>Grocery list!</h3>
                <div className = 'form-control'>
                    <input className = 'grocery' type = 'text' placeholder = 'e.g milk' value = {item} onChange = {(e)=>setItem(e.target.value)}/>
                    <button type = 'button' className = 'submit-btn' type = 'submit'>
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div> 
            </form>
            <div className = "grocery-container">
                <List list = {list} removeItem = {removeItem} editItem = {editItem}/>
                <button className = "clear-btn" onClick={clearList}>
                    Clear list!
                </button>
            </div>
        </section>
    );

} 

export default App
