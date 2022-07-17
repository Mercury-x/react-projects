import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [randomInfo, setRandomInfo] = useState({
    picture: {
      medium: defaultImage,
    },
    name: 'Random Person',
    email: 'Random@random.com',
    age: 999,
    street: 'random street',
    phone: '999-999-999',
    password: 'random password',
  });
  const [currentInfo, setCurrentInfo] = useState({
    key: 'name',
    val: 'random person',
  });
  const fetchData = async () => {
    const responce = await fetch(url);
    const json = await responce.json();
    setRandomInfo(json.results[0]);
    setCurrentInfo({
      key: 'name',
      val: json.results[0].name.first + json.results[0].name.last,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img src={randomInfo.picture.medium} alt='image' />
          <p className='user-title'>My {currentInfo.key} is</p>
          <p className='user-value'>{currentInfo.val}</p>
          <div className='values-list'>
            <button
              className='icon'
              onMouseEnter={() => {
                setCurrentInfo({
                  key: 'name',
                  val: randomInfo.name.first + randomInfo.name.last,
                });
              }}>
              <FaUser></FaUser>
            </button>
            <button
              className='icon'
              onMouseEnter={() => {
                setCurrentInfo({
                  key: 'email',
                  val: randomInfo.email,
                });
              }}>
              <FaEnvelopeOpen></FaEnvelopeOpen>
            </button>
            <button
              className='icon'
              onMouseEnter={() => {
                setCurrentInfo({
                  key: 'age',
                  val: randomInfo.dob.age,
                });
              }}>
              <FaCalendarTimes></FaCalendarTimes>
            </button>
            <button
              className='icon'
              onMouseEnter={() => {
                setCurrentInfo({
                  key: 'street',
                  val: randomInfo.location.street.name,
                });
              }}>
              <FaMap></FaMap>
            </button>
            <button
              className='icon'
              onMouseEnter={() => {
                setCurrentInfo({
                  key: 'phone',
                  val: randomInfo.phone,
                });
              }}>
              <FaPhone></FaPhone>
            </button>
            <button
              className='icon'
              onMouseEnter={() => {
                setCurrentInfo({
                  key: 'password',
                  val: randomInfo.login.password,
                });
              }}>
              <FaLock></FaLock>
            </button>
          </div>
          <button className='btn' onClick={() => fetchData()}>
            RANDOM USER
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
