import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sublink, setSublink] = useState(sublinks[0]);
  const [showSublink, setShowSublink] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [location, setLocation] = useState({});

  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);
  const openSublink = (index, coordinates) => {
    setShowSublink(true);
    setSublink(sublinks[index]);
    setLocation(coordinates);
  };
  const closeSublink = () => setShowSublink(false);
  const staySublink = () => setShowSublink(true);

  return (
    <AppContext.Provider
      value={{
        sublink,
        showSidebar,
        showSublink,
        location,
        openSidebar,
        closeSidebar,
        openSublink,
        closeSublink,
        staySublink,
      }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
