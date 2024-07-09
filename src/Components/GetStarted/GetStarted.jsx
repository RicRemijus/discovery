import React from 'react';
import './GetStarted.css';
import {Link} from 'react-router-dom'

const GetStarted = () => {
  return (
    <section className='g-wrapper'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started With Discovery Homes</span>
                <span className='orangeText'>Let's Find Your Dream Home</span>
                <span className='secondaryText'>
                    Subscribe and find super attractive price quotes from us.
                    <br />
                    Find your dream residences NOW!!!
                </span>
                <button className="btn">
                    <Link to={'mailto:ricremijus@gmail.com'}>Get Started</Link>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted;