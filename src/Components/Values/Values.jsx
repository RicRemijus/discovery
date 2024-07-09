import React, {useState} from 'react';
import './Values.css';
import data from '../../assets/Accordion';
import { IconContext } from 'react-icons/lib';
import {FiPlus, FiMinus} from 'react-icons/fi';
import {MdOutlineArrowDropDown} from 'react-icons/md';

const Values = () => { 
  const [expanded, setExpanded] = useState(false)

    const toggle = (index) =>{
        if(expanded === index){
            return setExpanded(null);
        }
        setExpanded(index)
    }
  return (
    <section className='v-wrapper'>
        <div className="paddings innerWidth flexSpaceBetween v-container">
          {/**Left Side */}
          <div className="v-left">
            <div className="image-container">
              <img src="./img/h222.jpg" alt="valueimg" />
            </div>
          </div>
          {/**Right Side */}
          <div className="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We Give To You</span>
            <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             Debitis cupiditate harum autem consectetur tenetur nisi eos perferendis neque quae sequi explicabo ex nesciunt odio voluptatibus quas, omnis veritatis dolorum saepe nemo numquam!
            </span>
            <IconContext.Provider value={{color:"blue", size:'25px'}}>
              {data.map((item, index)=>{
                return(
                  <>  
                  <div className="accordionItem" onClick={()=> toggle(index)} key={index} >
                     <div className='accordionBtn flexSpaceBetween'>
                       <div className='flexSpaceBetween icon'>{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <b className='flexSpaceBetween icon'>{expanded === index ? <FiMinus/> : <FiPlus/> }</b>
                  </div>
                  
                  </div>
                  {expanded === index ? (
                                <p className='accordionDetail'>{item.detail}</p>
                        ): null}
                  
                </>
               )
              })}
            </IconContext.Provider>
          </div>
        </div>
    </section>
  )
}

export default Values;