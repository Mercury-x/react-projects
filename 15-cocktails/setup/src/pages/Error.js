import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error-section section'>
      <div className='error-container'>
        <h1>oops! it's a dead end!</h1>
        <Link to='/'>
          <button className='btn btn-primary'>to home page</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
