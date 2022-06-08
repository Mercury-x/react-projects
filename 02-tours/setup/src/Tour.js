import React, { useState, useContext } from 'react';
import { appContext } from './App';

const Tour = ({ tourInfo }) => {
  // 是否展示Read More按钮，用于控制省略号
  const [readMore, setReadMore] = useState(false);
  // get context
  const { removeTour } = useContext(appContext);

  return (
    <article className='single-tour'>
      <img src={tourInfo.image} alt={tourInfo.name} />
      <footer>
        <div className='tour-info'>
          <h4 className='title'>{tourInfo.name}</h4>
          <h4 className='tour-price'>${tourInfo.price}</h4>
        </div>
        <p>
          {readMore ? tourInfo.info : `${tourInfo.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button
          className='delete-btn'
          onClick={() => {
            removeTour(tourInfo.id);
          }}>
          Not Intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
