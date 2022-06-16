import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSublink, closeSublink } = useGlobalContext();
  const displaySubmenu = (e, index) => {
    const text = e.target.textContext;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSublink(index, { center, bottom });
  };
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <li key={page}>
                <button
                  className='link-btn'
                  onMouseOver={(e) => {
                    displaySubmenu(e, index);
                  }}
                  onMouseLeave={() => closeSublink()}>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
