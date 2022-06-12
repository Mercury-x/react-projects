import React, { useState, useEffect } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('#b6a863');
  const [ligntAndDark, setLightAndDark] = useState([]);
  const [inputWarn, setInputWarn] = useState(false);

  const submitColor = (e) => {
    if (e) e.preventDefault();
    if (!/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
      // 输入框变红，表示输入invalid
      setInputWarn(true);
      return false;
    }
    setInputWarn(false);
    const newColors = [];
    const colorValues = new Values(color);
    newColors.push(...colorValues.all(10));
    setLightAndDark(newColors);
  };

  // 初始化颜色
  useEffect(() => {
    submitColor();
  }, []);

  return (
    <main>
      <header>
        <h2>color generator</h2>
        <form className='input-container'>
          <input
            type='text'
            value={color}
            className={inputWarn && 'input-warn'}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className='btn' onClick={submitColor}>
            submit
          </button>
        </form>
      </header>
      <section className='section'>
        {ligntAndDark.map((values) => {
          return <SingleColor key={values.hex} color={values}></SingleColor>;
        })}
      </section>
    </main>
  );
}

export default App;
