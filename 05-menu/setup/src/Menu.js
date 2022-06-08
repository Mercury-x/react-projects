import React from 'react';

const Menu = ({ menuItems }) => {
  return (
    <div className='section-center'>
      {menuItems.map((item) => {
        const { img, title, price, desc } = item;
        return (
          <article className='menu-item'>
            <img className='photo' src={img} alt={title} />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <div className='price'>${price}</div>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
