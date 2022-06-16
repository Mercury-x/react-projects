import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // 如果我这么写的话，value值改变不会向下传递
  // const value = {
  //   showModal: false,
  //   showSidebar: false,
  //   setShowModal: () => {
  //     console.log(value);
  //     value.showModal = !value.showModal;
  //   },
  // };

  // console.log('children: ');
  // console.log(children);
  // 这个children就是子组件，下面的value就是在子组件上传递属性

  // useState
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <AppContext.Provider
      value={{
        showModal,
        showSidebar,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
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
