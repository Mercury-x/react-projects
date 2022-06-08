import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  console.log(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {data.map((question) => {
            return (
              <SingleQuestion {...question} key={question.id}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
