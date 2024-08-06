import React, {useState, useEffect} from 'react';
import './interiorslide.css';
import { SlideInterior } from '../../assets/SlideContent';

const InteriorSlide = () => {
  const [imageIndex, setImageIndex] = useState(0);
  
  useEffect (() => {
    const interval = setInterval(()=>{
      setImageIndex((prevIndex) => (prevIndex + 1) % SlideInterior.length);
    }, 3000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div className='interior-slide'>
      <h1>Interiors:</h1>
      <div className="interiorslide-container">
        <div className="interior-text">
            <h2>Check out the stunning Interiors</h2>
        </div>
        <div className='interior-right'>
            <div className="interior-img-card">
            {SlideInterior.map((interior, index) => (
               <img src={interior.src} alt={`Slide ${index + 1}`} className={`pic ${index === imageIndex ? 'active' : ''}`} key={index} />
              
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default InteriorSlide;