import React from 'react';
import './index.css'; // Ensure this is correct
import Navbar from './components/navbar/Navbar';
import Ofwhite from './components/ofwhite/Ofwhite';
import Services from './components/services/Services';
import Benefit from './components/benefit/Benefit';
import Plan from './components/plan/Plan';
import Work from './components/work/Work';
import Work2 from './components/work2/Work2';
import Footer from './components/footer/Footer';
const App = () => {
  return <> 
  <main className='overflow-x-hidden '>
    <Navbar/>
    <Ofwhite/>
    <Services/>
    <Benefit/>
    <Plan/>
    <Work/>
    <Work2/>
    <Footer/>
  </main>
  </>;
};

export default App;