import React, {useState} from 'react';
import './Nav.css';
import {BiMenuAltRight} from 'react-icons/bi'

const Nav = () => {
    const [openMenu, setopenMenu] = useState(false)
  const getMenuStyles = (openMenu) =>{
    if(document.documentElement.clientWidth <= 800){
      return {right: !openMenu && "-100%"}
    }
  }
  return (
    <div className='header'>
        <div className='white-gradient' />
       <a href="" className="logo"><img src="/img/logo1.png" alt="" /><h5>Discovery Homes</h5></a>
       <nav className="navbar flexSpaceBetween" style={getMenuStyles(openMenu)}>
        <a href="">Residencies</a>
        <a href="">Our Values</a>
        <a href="">Get Started</a>
        <a href="" className='btn'>Contact Us</a>
        </nav>
        
        <div className="menu-btn" onClick={()=>setopenMenu((prev)=>!prev)}>
        <BiMenuAltRight size={30} />
        </div>
    </div>
  )
}

export default Nav;