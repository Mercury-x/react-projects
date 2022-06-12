import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ items, deleteItem, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((value) => {
        return (
          <article className='grocery-item' key={value.id}>
            <p className='title'>{value.title}</p>
            <div className='btn-container'>
              <button className='edit-btn' onClick={() => editItem(value.id)}>
                <FaEdit></FaEdit>
              </button>
              <button
                className='delete-btn'
                onClick={() => deleteItem(value.id)}>
                <FaTrash></FaTrash>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
