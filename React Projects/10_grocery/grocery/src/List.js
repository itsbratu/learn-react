import React from 'react'

const List = ({list , removeItem , editItem}) => {
    return (
        <div className = "grocery-list">
            {list.map((item)=>{
                const {id , title} = item;
                return(
                    <article className = "grocery-item" key = {id}>
                        <p className = 'title'>{title}</p>
                        <div className = "btn-container">
                            <button className = "edit-btn" onClick={()=>editItem(id)}><i className="fas fa-edit"></i></button>
                            <button className = "delete-btn" onClick={()=>removeItem(id)}><i className="fas fa-trash"></i></button>
                        </div>
                    </article>
                );
            })}
        </div>
    )
}

export default List
