import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Submenu></Submenu>
      <Sidebar></Sidebar>
    </>
  );
}

export default App;
