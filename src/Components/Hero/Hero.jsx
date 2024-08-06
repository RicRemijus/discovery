import React, { useState, useEffect } from "react";
import "./hero.css";
import { BsHouseAdd } from "react-icons/bs";
import CountUp from "react-countup";

const Hero = () => {
  // const [text, setText] = useState("");
  // const [fullText, setFullText] = useState("Discover");

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   if (index < fullText.length) {
  //     setTimeout(() => {
  //       setText(text + fullText[index]);
  //       setIndex(index + 1);
  //     }, 305);
  //   }
  // }, [index]);
  const fullText = 'Discover';
  const [displayText, setDisplayText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(()=>{
    let index = 0;
    const typingInterval = setInterval(()=>{
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if(index === fullText.length){
        clearInterval(typingInterval);
      }
    }, 250)
    return () => clearInterval(typingInterval);
  },[fullText])
  
  useEffect(()=>{
    //Trigger the animation after the component mounts
    const timer = setTimeout(()=>{
      setHasAnimated(true);
    }, 50);
    return () => clearTimeout(timer);
  },[]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-title">
            <span className="hero-circle" />
            <h1 className={hasAnimated ? "animate-heading" : ""}>
              {displayText} <br /> more suitable <br /> properties
            </h1>
          </span>
          <span className="hero-description">
            <p>Easily find arrays of properties that suit your taste</p>
            <p>Forget all difficulties in finding a residence for you</p>
          </span>
          <span className="search-icon">
            <BsHouseAdd color="blue" size={25} />
            <input type="text" name="" id="" />
            <button className="search-btn">Search</button>
          </span>
          <div className="statistics">
            <div className="stats">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <b>+</b>
              </span>
              <p>Premium products</p>
            </div>
            <div className="stats">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <b>+</b>
              </span>
              <p>Happy Customers</p>
            </div>
            <div className="stats">
              <span>
                <CountUp end={38} />
                <b>+</b>
              </span>
              <p>Won Awards</p>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="img-card">
            <img src="/img/discovery.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
