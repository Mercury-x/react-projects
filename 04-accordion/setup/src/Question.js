import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <div className='btn'>
          {showInfo ? (
            <AiOutlineMinus
              onClick={() => setShowInfo(!showInfo)}></AiOutlineMinus>
          ) : (
            <AiOutlinePlus
              onClick={() => setShowInfo(!showInfo)}></AiOutlinePlus>
          )}
        </div>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
