import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { closeSidebar, showSidebar } = useGlobalContext();

  return (
    <div className={`sidebar-wrapper ${showSidebar ? 'show' : ''}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
        <div className='sidebar-links'>
          {sublinks.map((sublink) => {
            const { page, links } = sublink;
            return (
              <article key={page}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link) => {
                    const { label, icon, url } = link;
                    return (
                      <a href={url} key={label}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
