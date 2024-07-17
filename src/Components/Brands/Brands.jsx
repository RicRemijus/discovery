import React from 'react';
import './Brands.css';

const Brands = () => {
 
  return (
    <>  
    <div className='b-wrapper'>
      <div className="b-container paddings innerWidth">
      <h2 className="b-title orangeText">Our Partners</h2>
        <div className="b-card">
        <img src="./img/brand.jpg" alt="" />
        <img src="./img/brand1.jpg" alt="" />
        <img src="./img/brand2.jpg" alt="" />
        <img src="./img/brand3.jpg" alt="" />
        <img src="./img/brand4.jpg" alt="" />
        <img src="./img/brand5.jpg" alt="" />
        </div> <br />
        <h2 className="b-title2 orangeText">Top Rated Homes</h2>
        <p className='desk'>Make your choice from these top rate homes and have a lifetime of comfort!</p>
      </div>
    </div>
    
    </>
    
  )
}

export default Brands;