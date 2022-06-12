import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ color }) => {
  const [tip, setTip] = useState(false);
  const copyToClipboard = () => {
    setTip(true);
    navigator.clipboard.writeText(`#${color.hex}`);
    setTimeout(() => {
      setTip(false);
    }, 1000);
  };
  return (
    <div
      onClick={copyToClipboard}
      className={`block ${color.type === 'shade' && 'block-white'}`}
      style={{ backgroundColor: `#${color.hex}` }}>
      <p>{color.weight}%</p>
      <p>{`#${color.hex}`}</p>
      {tip && <p>copy to clipboard!</p>}
    </div>
  );
};

export default SingleColor;
