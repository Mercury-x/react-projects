import React, { useState } from 'react';

const Categories = ({ category, filterItems }) => {
  const [curCategory, setCurCategory] = useState('all');
  return (
    <div className='btn-container'>
      {category.map((value, index) => {
        return (
          <div>
            <div
              className='filter-btn'
              key={index}
              onClick={() => {
                filterItems(value);
                setCurCategory(value);
              }}>
              {value}
            </div>
            {curCategory === value && <div className='underline'></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
