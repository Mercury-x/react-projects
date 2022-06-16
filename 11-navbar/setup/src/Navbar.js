import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showContainer, setShowContainer] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const height = linksRef.current.getBoundingClientRect().height;
    if (showContainer) {
      linksContainerRef.current.style.height = `${height}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showContainer]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowContainer(!showContainer)}>
            <FaBars></FaBars>
          </button>
        </div>
        <div
          ref={linksContainerRef}
          className={`${
            showContainer ? 'links-container show-container' : 'links-container'
          }`}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
