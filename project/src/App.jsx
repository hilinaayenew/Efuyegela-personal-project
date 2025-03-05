import React from 'react';
import './index.css'; // Ensure this is correct
import Navbar from './components/navbar/navbar';
import Ofwhite from './components/ofwhite/ofwhite';
import Services from './components/services/services';
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