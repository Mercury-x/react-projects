import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [category, setCategory] = useState(['All']);
  const [filterMenu, setFilterMenu] = useState(items);

  useEffect(() => {
    // // set category
    // const newCategory = ['all'];
    // // 也可以用set来实现
    // items.forEach((item) => {
    //   for (let value of newCategory) {
    //     if (value === item.category) return;
    //   }
    //   newCategory.push(item.category);
    //   // setState是异步的
    // });
    const newCategory = ['all', ...new Set(items.map((item) => item.category))];
    setCategory(newCategory);
  }, []);

  const filterItems = function (category) {
    if (category === 'all') {
      setFilterMenu(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setFilterMenu(newItems);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories category={category} filterItems={filterItems}></Categories>
        <Menu menuItems={filterMenu}></Menu>
      </section>
    </main>
  );
}

export default App;
