import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [persons, setPersons] = useState(data);
  const chearAll = () => {
    setPersons([]);
  };
  return (
    <main>
      <section className='container'>
        <h3>{persons.length} birthdys today</h3>
        <List persons={persons}></List>
        <button onClick={chearAll}>clear all</button>
      </section>
    </main>
  );
}

export default App;
