import React, {useState, useEffect, useRef} from 'react';
import './contact.css';
import { contactData } from '../../assets/Accordion';

const Contact = () => {
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
    <div className='contact'>
        <div className="contact-container" ref={sRef}>
            <div className="left-box">
                <div className="contact-text-box">
                    <h2>Our Contacts</h2>
                    <h1>Easy to Connect and Get in Touch</h1>
                    <p>Book us for inspection and you'll be glad you did. <br />Choose any contact means suitable for you</p>
                </div>
                <div className="contact-box">
                    {contactData.map((con, index)=>( 
                        <div className="contact-card-box" key={index}>
                            <span className="box-content">
                                <b className="contact-icon">{con.contactIcon}</b>
                                <span className="contact-type">
                                    <b>{con.title}</b>
                                    <p>{con.mobile}</p>
                                </span>
                            </span>
                            <button className="contact-btn">{con.action}</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-box">
                <div className="img-kard">
                    <img src="./img/home.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;