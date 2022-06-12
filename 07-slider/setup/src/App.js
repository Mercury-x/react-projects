import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  // person index
  const [index, setIndex] = useState(0);
  const [lastTouch, setLastTouch] = useState(new Date().getTime());
  const [tid, setTid] = useState(null);

  // 切换前一个或后一个
  const switchPerson = (status) => {
    setIndex((index + status + data.length) % data.length);
    setLastTouch(new Date().getTime());
    if (tid) {
      clearInterval(tid);
    }
  };

  // 设置新的循环计时器
  // const setNewInterval = () => {
  //   const newTid = setInterval(() => {
  //     setIndex((index + 1 + data.length) % data.length);
  //   }, 1000);
  //   setTid(newTid);
  // };

  useEffect(() => {
    const tid = setInterval(() => {
      setIndex((index + 1 + data.length) % data.length);
    }, 2000);
    return () => {
      clearInterval(tid);
    };
  }, [index]);

  return (
    <main>
      <section className='section'>
        <div className='title'>
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className='section-center'>
          {data.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            const curIndex = (index - 1 + data.length) % data.length;
            if (personIndex === curIndex) {
              position = 'lastSlide';
            }
            return (
              <article className={position} key={id}>
                <div>
                  <img className='person-img' src={image} alt={name} />
                </div>
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon'></FaQuoteRight>
              </article>
            );
          })}
          <footer>
            <button className='icon'>
              <FiChevronLeft
                className='prev'
                onClick={() => switchPerson(-1)}></FiChevronLeft>
            </button>
            <button className='icon'>
              <FiChevronRight
                className='next'
                onClick={() => switchPerson(1)}></FiChevronRight>
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default App;
