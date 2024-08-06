import React, {useState} from 'react';
import './values.css';
import { BsShield } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import Dropdown from '../dropdown/Dropdown';
import {dropDownData} from '../../assets/Accordion';

const Values = () => {
    const [dropdown, setIsDropdown] = useState(false);

    const toggleDropdown = () => {
        setIsDropdown(!dropdown);
    }

  return (
    <div className='value-card'>
        <div className="value-content">
         <div className="left-value">
            <div className="img-card left-img">
                <img src="/img/value.jpg" alt="" />
            </div>
         </div>
         <div className="right-value">
            <div className="value-desc">
                <h2>Our Values</h2>
                <h1>Value We Give To You</h1>
                <p>Discover unparalleled service and expertise in finding your perfect home. With personalized solutions tailored to meet your unique needs.</p>
            </div>
            <div className="value-dropdown">
                <div className="drop">
                    {dropDownData.map((info, index) => (   
                    <Dropdown heading={info.heading} icon={info.icon} key={index}>
                      <p className='reveal'>{info.detail}</p>
                    </Dropdown>
                    ))}
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Values;