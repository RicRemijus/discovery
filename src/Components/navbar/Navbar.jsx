import React,{useState} from 'react';
import './navbar.css';
import {BiMenuAltRight} from 'react-icons/bi'
import { FaRegTimesCircle, FaTimesCircle } from 'react-icons/fa';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const getMenuStyles = (openMenu) => {
        if(document.documentElement.clientWidth <= 800){
            return {right: !openMenu && "-100%"}
        }
    };

  return (
    <div className='navbar'>
         <div className='white-gradient'/>
        <div className="navbar-container">
            <div className="logo-card">
                <img src="/img/logo.png" alt="" />
                <p>Discovery Homes</p>
            </div>
            <div className="navbar-links" style={getMenuStyles(openMenu)}>
                <a href="">Properties</a>
                <a href="">Our Values</a>
                <a href="">Contact Us</a>
                <a href="">Add Property</a>
                <a href="" className='get-started-btn'>Get Started</a>
            </div>
            <div className="mobile-icon" onClick={()=>setOpenMenu((prev)=>!prev)}>
                { openMenu ? <FaRegTimesCircle size={30} /> :<BiMenuAltRight size={30}/>}
            </div>
        </div>
    </div>
  )
}

export default Navbar;