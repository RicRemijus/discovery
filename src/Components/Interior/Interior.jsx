import React, {useState, useEffect, useRef} from 'react';
import './interior.css';
import { SlideInterior } from '../../assets/SlideContent';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

const Interior = () => {
    const [current, setCurrent] = useState(0)
    const length = SlideInterior.length
    const time_out = useRef(null)

    // useEffect(()=>{
    //       const nextSlide = () =>{
    //         setCurrent(current =>(current === length - 1 ? 0 : current + 1));
    //       };
    //       time_out.current = setTimeout(nextSlide, 2000);
          
    //       return function(){
    //         if(time_out.current){
    //             clearTimeout(time_out.current)
    //         }
    //       };
    //     },[current, length])
    
    
        const prevSlide = ()=>{
            if(time_out.current){
                clearTimeout(time_out.current)
            }
            setCurrent(current === length - 1 ? 0 : current + 1);
    
            //console.log(current);
        }
    
        const nextSlide = ()=>{
            if(time_out.current){
                clearTimeout(time_out.current)
            }
            setCurrent(current === 0 ? length - 1 : current - 1);
    
            //console.log(current);
        }
    
        if(!Array.isArray(SlideInterior) || SlideInterior.length <= 0){
            return null;
        }

  return (
    <div className='i-wrapper'>
      <div className="paddings innerWidth flexColStart i-container">
        <div className="i-head flexColStart ">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Stunning Interiors</span>
        </div>
        {SlideInterior.map((slides,i)=>(
                    <div className="flexColCenter slide-card" key={i}>
                        {i === current && (
                        <div className="flexColCenter i-card">
                            <img src={slides.src} alt="" className="i-image" />
                             
                         </div>
                          )}
                    </div>
                )
               )}
            <div className="i-sliderBtns">
                <IoArrowBack  className='i-prev' onClick={prevSlide}/>
                <IoArrowForward className='i-next' onClick={nextSlide} />
            </div>
      </div>
    </div>
  )
}

export default Interior;