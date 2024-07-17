import React from 'react';
import './Footer.css';
import { FiGithub } from 'react-icons/fi';
import {CiLocationOn} from 'react-icons/ci';


const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerWidth flexSpaceBetween f-container">
            {/**Left Side */}
            <div className="flexColStart f-left">
            <span className='logo'><img src="/img/logo.png" alt="" /><h5 style={{color:"white"}}>DiscoverybHomes</h5></span> <br />

                <span className="secondaryText">
                    Our Vision is to make all people <br/>
                    have affordable and exquisite house to live in
                </span>
            </div>
            {/**Right Side */}
            <div className="flexColStart f-right">
                <span className='primaryText'> Address</span> <br />
                <CiLocationOn size={30} style={{color:'white'}} />
                <span className='secondaryText'> Abuja, Awka, Asaba, Benin, Enugwu, Portharcourt, Lagos, Uyo</span>
              <div className="flexSpaceBetween f-menu">
                <span>Property</span>
                <span>Services</span>
                <span>Products</span>
                <span>About Us</span>
              </div>
              
            </div>
            
        </div>
        <hr /> 
        <div className="f-author innerWidth paddings flexColCenter">
         <span className="nurseryText"> <a href=""> &copy; {new Date().getFullYear()} RicRemijus&trade;  <FiGithub size={40} style={{color:"green"}}/></a>. All Rights Reserved</span>
         
        {/* <a href="/github.com/RicRemijus" className='flexEnd'>
         <span style={{color:"green", fontSize:"2rem"}}> Contact me on👉  </span><FiGithub size={40} style={{color:"white"}}/></a>
         */}
        </div>
    </section>
  )
}

export default Footer;