import React, { useState } from 'react';
import data from './data';
function App() {
  const [resultData, setResultData] = useState(0);
  const [displayData, setDisplayData] = useState([]);
  // input输入监听回调
  const onChangeEvent = (event) => {
    if (isNaN(Number(event.target.value))) return false;
    setResultData(Number(event.target.value));
    event.preventDefault();
  };

  // 生成文本
  const generateText = (event) => {
    const newText = [];
    // 若生成文本数目为负，则生成一条
    if (resultData < 0) newText.push(data[0]);
    else if (resultData > 0) newText.push(...data.slice(0, resultData));
    setDisplayData([...newText]);
    console.log(newText);
    event.preventDefault();
  };
  return (
    <section className='section-center'>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className='lorem-form'>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          value={resultData}
          onChange={onChangeEvent}
        />
        <button className='btn' onClick={generateText}>
          GENERATE
        </button>
      </form>
      <article className='lorem-text'>
        {displayData.map((value, index) => {
          return (
            <p className='result' key={index}>
              {value}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
