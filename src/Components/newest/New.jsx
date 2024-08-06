import React from 'react';
import './new.css';
import Button from '../button/Button';
import { IoArrowForward } from 'react-icons/io5';


const New = () => {
  return (
    <div className='new'>
      <h1>New Homes:</h1>
        <div className="new-container">
            <div className="new-left">
                <h2>View Our Newest Homes</h2>
                <img src="./img/new1.jpg" alt="" />
                <p>Luxury Villa in the Heart of Maitama</p>
                <Button buttonStyle='btn-primary' className='nb'>more details<IoArrowForward className='icon'/></Button>
            </div>
            <div className="new-right">
                <img src="./img/new2.jpg" alt="" />
                <p>Lush Apartment in Lugbe</p>
                <Button >More details <IoArrowForward className='icon'/></Button>
            </div>
        </div>
    </div>
  )
}

export default New;