import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertControl, setAlertControl] = useState({});
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(0);

  // 添加新项目到列表中
  const submitNewItem = (e) => {
    e.preventDefault();
    if (inputItem === '') {
      // empty alert
      setAlertControl({
        text: 'please enter values',
        type: 'danger', // or success
      });
      setShowAlert(true);
      return false;
    }
    // edit or submit
    // common phase
    setInputItem('');
    let newItems;
    if (edit) {
      // edit
      newItems = [...items];
      const index = items.findIndex((value) => value.id === editId);
      newItems[index].title = inputItem;
      setItems(newItems);
      setAlertControl({
        text: 'value changed',
        type: 'success', // or success
      });
    } else {
      // submit
      newItems = [
        ...items,
        {
          title: inputItem,
          id: new Date().getTime(),
        },
      ];
      setItems(newItems);
      setAlertControl({
        text: 'item added to the list',
        type: 'success', // or success
      });
    }
    setShowAlert(true);
  };

  // save to local storage
  useEffect(() => {
    localStorage.setItem('bud', JSON.stringify(items));
  }, [items]);

  // alert control
  useEffect(() => {
    const tid = setTimeout(() => setShowAlert(false), 3000);
    return () => clearTimeout(tid);
  }, [showAlert]);

  // read items from localstorage
  useEffect(() => {
    // if bud not storage before， set empty array to items;
    const localItems = JSON.parse(localStorage.getItem('bud')) || [];
    setItems(localItems);
  }, []);

  // claer items
  const clearItems = () => {
    setItems([]);
    setShowAlert(true);
    setAlertControl({
      text: 'empty list',
      type: 'danger', // or success
    });
  };

  // delete item
  const deleteItem = (id) => {
    const newItems = [...items];
    const index = newItems.findIndex((value) => value.id === id);
    newItems.splice(index, 1);
    setItems(newItems);
    setAlertControl({
      text: 'item removed',
      type: 'danger', // or success
    });
    setShowAlert(true);
  };

  // edit item
  const editItem = (id) => {
    // set to edit
    setEdit(true);
    setEditId(id);
    const index = items.findIndex((value) => value.id === id);
    setInputItem(items[index].title);
  };

  return (
    <section className=' section-center'>
      <form className='grocery-form'>
        {showAlert && <Alert alertControl={alertControl}></Alert>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g.eggs'
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
          />
          <button className='submit-btn' onClick={submitNewItem}>
            {!edit ? 'submit' : 'edit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List items={items} deleteItem={deleteItem} editItem={editItem}></List>
        {items.length > 0 && (
          <button className='clear-btn' onClick={clearItems}>
            clear items
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
