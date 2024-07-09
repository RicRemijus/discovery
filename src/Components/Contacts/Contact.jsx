import React from 'react';
import './Contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill, BsPersonVideo3} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexSpaceBetween c-container">
            {/**Left Side */}
            <div className="flexColStart c-left">
            
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We are always ready to help you get the best value for your money. <br />
                  We believe a good place to live can make your life better and productive
                </span>
                <div className="flexColStart contactMode">
                    {/**First Row */}
                    <div className="flexStart row">
                        {/**1st mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexSpaceBetween icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>0803-34657-99</span>
                                </div>
                            </div>
                            <div className="flexSpaceBetween btn">Call Now </div>
                        </div>
                        {/**2nd Mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexSpaceBetween icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>0803-34657-99</span>
                                </div>
                            </div>
                            <div className="flexSpaceBetween btn">Chat Now </div>
                        </div>
                    </div>

                    {/**2nd Row */}
                    <div className="flexStart row">
                        {/**1st Mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexSpaceBetween icon">
                                    <BsPersonVideo3 size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>0803-34657-99</span>
                                </div>
                            </div>
                            <div className="flexSpaceBetween btn">Video Call Now </div>
                        </div>
                        {/**2nd Mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexSpaceBetween icon">
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>0803-34657-99</span>
                                </div>
                            </div>
                            <div className="flexSpaceBetween btn">Message Now </div>
                        </div>
                    </div>
                </div>
            </div>
            {/**Right Side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./img/h102.jpg" alt="" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Contact;