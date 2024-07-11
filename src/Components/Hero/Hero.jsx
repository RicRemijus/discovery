import React, {useState, useEffect} from 'react';
import './Hero.css';
import CountUp from 'react-countup';
import { BsSearch } from 'react-icons/bs';


const Hero = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] =useState("Discover")
  
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    if(index < fullText.length){
      setTimeout(()=>{
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 305)
    }
  }, [index])
  return (
    <section className='hero-wrapper'>
  
      <div className="paddings innerWidth flexSpaceBetween hero-container">
        {/**Left Side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>{text} <br /> more suitable <br />properties</h1>
            {/* <h1>Discover <br /> more suitable <br /> property</h1> */}
          </div> 
          <div className="flexColStart hero-description">
            <span className='secondaryText'>Easily find arrays of properties that suit your taste</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexSpaceBetween innerWidth search-bar">
             <BsSearch color="var(--blue)" size={25}/>
             <input type="text" name="" id="" />
             <button className="btn">Search</button>
          </div>
          <div className="flexSpaceBetween stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={38}  />
                <span>+</span>
              </span>
              <span className='secondaryText'>Award Winning</span>
            </div>
          </div>
        </div>
        {/*Right Side*/}
        <div className="hero-right flexEnd">
          <div className="image-container im1">
            <img src="./img/discovery.jpg" alt="" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero;