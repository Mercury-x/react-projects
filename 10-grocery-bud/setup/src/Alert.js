import React, { useEffect } from 'react';

const Alert = ({ alertControl }) => {
  const { type, text } = alertControl;
  return <p className={`alert alert-${type}`}>{text}</p>;
};

export default Alert;
