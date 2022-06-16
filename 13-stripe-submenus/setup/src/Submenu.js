import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const { sublink, showSublink, staySublink, closeSublink, location } =
    useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside
      className={`submenu ${showSublink ? 'show' : ''}`}
      onMouseOver={() => staySublink()}
      onMouseLeave={() => closeSublink()}
      ref={container}>
      <section>
        <h4>{sublink.page}</h4>
        <div className={`submenu-center col-${sublink.links.length}`}>
          {sublink.links.map((link) => {
            const { label, icon, url } = link;
            return (
              <a href={url} key={label}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
