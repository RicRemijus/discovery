import React, {useState, useEffect, useRef} from 'react';
import './residence.css'
import {IoMdArrowRoundForward} from 'react-icons/io'
import { SliderData } from '../../assets/SlideContent';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'

const Residence = () => {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length
    const time_out = useRef(null)
    const [isIntersecting, setIsintersecting] = useState(false);
    const sRef = useRef(null);
   
   useEffect(() => {
      const observer = new IntersectionObserver( 
       ([entry]) => {
           setIsintersecting(entry.isIntersecting);

       },
       {rootMargin: "-300px"}//adjust as needed
      );
       console.log(isIntersecting);
       observer.observe(sRef.current);

      return () => observer.disconnect();
   },[isIntersecting]);

   useEffect(() => {
       if(isIntersecting){
           sRef.current.querySelectorAll("div").forEach((el) => {
           el.classList.add('slideIn');
           });
       }else{
           sRef.current.querySelectorAll("div").forEach((el) => {
           el.classList.remove('slideIn');
           });
       }
   }, [isIntersecting]);

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

    if(!Array.isArray(SliderData) || SliderData.length <= 0){
        return null;
    }

  return (
    <div className='abTaina'>
        <div className="abCard" ref={sRef}>
            <div className="abText">
                <h1 className="abHead">Explore Our Beautiful Homes with Modern Designs </h1>
                <p>Browse through our extensive listings of homes, apartments, villas, and more, meticulously categorized and updated in real-time.</p>
                <br />
                <h1 className="abHead">Expert Guidance and Resources</h1>
                <p>Access valuable resources, market insights, and expert advice from seasoned real estate professionals.</p>
            </div>
            <div className="animCard">
            {SliderData.map((slides, i)=>{
                return(
                    <div className="h-slided" key={i}>
                        {i === current && (
                        <div className="abImgCard">
                            <img src={slides.image} alt=""  />
                             <div className="twitle">
                               <h1>{slides.title}</h1>
                               <b className='orang'>{slides.price}</b>
                             <button className='content-btn'>{slides.label} <IoMdArrowRoundForward className="view-btn" /> </button>
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
    </div>
  )
}

export default Residence;