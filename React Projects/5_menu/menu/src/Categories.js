import React from 'react';

const Categories = ({categories , filterCategory}) => {
    return (
        <div className = 'btn-container'>
            {categories.map((category)=>{
                return (
                    <button type = 'button' className = 'filter-btn' onClick = {()=>{filterCategory(category)}}>
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
