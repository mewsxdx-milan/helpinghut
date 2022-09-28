import logo from './logo.svg';
import './App.css';

import React,{ useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Caarousel from './components/Carousel';
import Work from './components/Work';


function App() {

  return (
      <>
      <Navbar/>
      <div className='main'>
      <Caarousel/>
        <Work/>
      </div>
   
      
      </>
 
  );
}

export default App;
