import React,{useState} from 'react'
import './properties.css';
import { SliderData } from '../../assets/SlideContent';
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'
import Button from '../button/Button';


const Properties = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nxtSlide = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
    };

    const preSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + SliderData.length) % SliderData.length);
    };

  return (
    <div className="properties"> 
    <h1>Properties:</h1>  
    <div className="property-container"> 
    <div className="property-left-text">
      <h2>Checkout Our Beautiful Homes with Modern Designs</h2>
    </div>                 
    <div className='property-right-img-card'>
        <button className="p-btn" onClick={preSlide}><IoArrowBack className='btn-arrow'/></button>
        <div className="slide">
            <img src={SliderData[currentIndex].image} alt={SliderData[currentIndex].title} />
            <span className="info-overlay">
                <h2 className='img-title'>{SliderData[currentIndex].title}</h2>
                <b className='img-price'>{SliderData[currentIndex].price}</b>
            </span>
            <Button className='img-link'>{SliderData[currentIndex].label} <IoMdArrowRoundForward className="link-arrow" /> </Button>
          
        </div>
        <button className="n-btn" onClick={nxtSlide}><IoArrowForward className='btn-arrow'/></button>
    </div>
    </div>
    </div>
  )
}

export default Properties;