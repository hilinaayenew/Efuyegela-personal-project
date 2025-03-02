import React from 'react';
import './index.css'; // Ensure this is correct
import Navbar from './components/navbar/navbar';
import Ofwhite from './components/ofwhite/ofwhite';
const App = () => {
  return <> 
  <main className='overflow-x-hidden '>
    <Navbar/>
    <Ofwhite/>
  </main>
  </>;
};

export default App;