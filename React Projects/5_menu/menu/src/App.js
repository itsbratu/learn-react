import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categories = ['all' , ...new Set(items.map((item)=>item.category))];

function App() {
  
  const [menuItems , setMenuItems] = useState(items);

  const filterCategory = (category) => {
    if (category === 'all'){
      setMenuItems(items);
      return;
    }else{
      const newMenuItems = items.filter((item) => item.category === category);
      setMenuItems(newMenuItems);
    }
  }

  return (
    <main>
      <section className = 'menu section'>
        <div className = 'title'>
          <h2>Our menu!</h2>
          <div className = 'underline'/>
        </div>

        <Categories categories = {categories} filterCategory = {filterCategory} />
        <Menu menuItems = {menuItems}/>

      </section>
    </main>
  );

}

export default App;
