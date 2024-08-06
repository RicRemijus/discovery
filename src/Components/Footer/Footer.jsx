import React from 'react';
import './footer.css';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-subscription">
            <p className="subscription-heading">Join the Discovery newsletter to receive our latest and best real estate deals</p>
            <p className="subscription-text">You can unsubscribe anytime.</p>
            
                <form className='subscription-form'>
                    <input type="email" name="email" className="subscription-email" placeholder="Your Email" />
                    <Button buttonStyle='btn-outline'>Subscribe</Button>
                </form>
        </div>
        <div className="footer-card">
            <div className="left-footer">
                <span className="footer-logo">    
                <img src="./img/logo.png" alt="" />
                <h1>Discovery Homes</h1>
                </span>
                <p>Own a home today!!!</p>
            </div>
            <div className="right-footer">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link>How it works</Link>
                        <Link>Partners</Link>
                        <Link>Properties</Link>
                        <Link>Testimonials</Link>
                        <Link>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link>Get started</Link>
                        <Link>Support</Link>
                        <Link>Agencies</Link>
                        <Link>Sponsorship</Link>
                        <Link>Influencers</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Branch</h2>
                        <Link>Abuja</Link>
                        <Link>Enugwu</Link>
                        <Link>Lagos</Link>
                        <Link>Owerri</Link>
                        <Link>Port Harcourt</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link>Submit Videos</Link>
                        <Link>Stream Videos</Link>
                    </div>
                </div>
                </div>
        </div>
          <hr />
            <span className="social-icons">
                <Link><BsFacebook/></Link>
                <Link><BsInstagram/></Link>
                <Link><BsYoutube/></Link>
            </span>
    </div>
  )
}

export default Footer