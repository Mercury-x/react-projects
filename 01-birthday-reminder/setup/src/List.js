import React from 'react';

const List = ({ persons }) => {
  return (
    <>
      <ul>
        {persons.map((person) => {
          return <SinglePerson key={person.id} {...person}></SinglePerson>;
        })}
      </ul>
    </>
  );
};

const SinglePerson = ({ name, age, image }) => {
  return (
    <li className='person'>
      <img src={image} alt={name} />
      <section>
        <h4>{name}</h4>
        <p>{age} years</p>
      </section>
    </li>
  );
};

export default List;
