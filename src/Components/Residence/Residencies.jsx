import React, {useState, useEffect, useRef} from 'react';
import './Residencies.css';
import {IoMdArrowRoundForward} from 'react-icons/io'
import { SliderDate } from '../../assets/SliderData';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';

const Residencies = () => {
    const [current, setCurrent] = useState(0)
    const length = SliderDate.length
    const time_out = useRef(null)

    useEffect(()=>{
      const nextSlide = () =>{
        setCurrent(current =>(current === length - 1 ? 0 : current + 1));
      };
      time_out.current = setTimeout(nextSlide, 2000);
      
      return function(){
        if(time_out.current){
            clearTimeout(time_out.current)
        }
      };
    },[current, length])


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

    if(!Array.isArray(SliderDate) || SliderDate.length <= 0){
        return null;
    }
  return (
    <div className='h-wrapper'>
        <div className="innerWidth paddings flexColStart">
            <span className="orangeText">Explore Our Beautiful Homes</span>
            <span className="primaryText">Popular Residencies</span>
        </div>
        <div className="h-container">
        
            {SliderDate.map((slides, i)=>{
                return(
                    <div className="h-slides" key={i}>
                        {i === current && (
                        <div className="h-slider">
                            <img src={slides.image} alt="" className="h-image" />
                             <div className="h-content innerWidth paddings">
                               <h1>{slides.title}</h1>
                               <b className='orangeText'>{slides.price}</b>
                             <button className='h-button'>{slides.label} <IoMdArrowRoundForward className="h-arrowBtns" /> </button>
                            </div>                       
                         </div>
                          )}
                    </div>
                )
            })}
            <div className="h-sliderBtns">
                <IoArrowBack  className='prev' onClick={prevSlide}/>
                <IoArrowForward className='next' onClick={nextSlide} />
                {/* <button className='prev' onClick={prevSlide}>&lt;</button>
                <button className='next' onClick={nextSlide}>&gt;</button> */}
            </div>
        </div>
    </div>
  )
}

export default Residencies;