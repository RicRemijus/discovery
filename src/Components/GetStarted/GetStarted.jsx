import React from 'react';
import './getStarted.css'
import Button from '../button/Button';

const GetStarted = () => {
  return (
    <div className='get-started'>
        <div className="get-card">
            <h1>Get Started With Discovery</h1>
            <h2>Find Your Residence Soon</h2>
            <li>Subscribe and get super exciting price quotes from us</li>
            <li>Books us for inspection to make your choice from our arrays of properties</li>
            <Button buttonStyle='btn-primary'>Get Started</Button>
        </div>
    </div>
  )
}

export default GetStarted;