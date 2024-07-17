import React, {useState, useEffect, useRef} from 'react';
import './Info.css';
import {IoMdArrowRoundForward} from 'react-icons/io';

const Info = () => {
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
  return (
    <section className='s-wrapper'>
       <div className="s-container" ref={sRef}>
             <div className="s-left flexColStart innerWidth paddings">
                <h1 className='orangeText'>Top Rated</h1>
                <p className='primaryText'>Access valuable resources, market insights, and expert advice from seasoned real estate professionals.</p>
                <p className='secondaryText'>Streamline your real estate transactions with our integrated tolls and service.</p>
                <button className='h-button'>View Home <IoMdArrowRoundForward className="h-arrowBtns" /> </button>
             </div>
             <div className="s-right">
                <img src="./img/home.jpg" alt="home" />
             </div>
       </div>
    </section>
  )
}

export default Info