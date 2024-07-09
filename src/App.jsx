import React from 'react';
import './App.css'
import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import { Brands, Residencies,Interior, Info, Values, Contact, Testimonies, GetStarted  } from './Components';
import Aric from './Components/aric/Aric';


function App() {
  
  return (
    <>
      <div className='app'>
      <div>
        <div className='white-gradient' />
        <Nav/>
        <Hero/>
      </div>
        <div className="app-container">
        <Brands/>
        <Residencies/> 
        {/* <Aric/> */}
         <Interior/>
         <Info/>
         <Values/>
         <Contact/>
         <Testimonies/>
         <GetStarted/>
         <Footer/>
        </div>
        
      </div>
    </>
  )
}

export default App;
