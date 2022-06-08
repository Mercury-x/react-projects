import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [person, setPerson] = useState(people[0] ? people[0] : {});
  const nextPerson = function (status) {
    const index = people.findIndex((value) => value.id === person.id);

    if (status === 0) {
      let seed = Math.floor(Math.random() * people.length);
      while (seed === index) {
        seed = Math.floor(Math.random() * people.length);
      }
      setPerson(people[seed]);
    } else {
      setPerson(people[(index + status + people.length) % people.length]);
    }
  };
  return (
    <div className='review'>
      <div className='img-container'>
        <img className='person-img' src={person.image} alt={person.name} />
        <div className='quote-icon'>
          <FaQuoteRight></FaQuoteRight>
        </div>
      </div>
      <h4 className='author'>{person.name}</h4>
      <p className='job'>{person.job}</p>
      <p className='info'>{person.text}</p>
      <div className='button-container'>
        <FaChevronLeft
          className='prev-btn'
          onClick={() => nextPerson(-1)}></FaChevronLeft>
        <FaChevronRight
          className='next-btn'
          onClick={() => nextPerson(1)}></FaChevronRight>
      </div>
      <button className='random-btn' onClick={() => nextPerson(0)}>
        suprise me
      </button>
    </div>
  );
};

export default Review;
