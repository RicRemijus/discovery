import React from 'react';
import './button.css';

const STYLES = ['btn-primary', 'btn-outline', 'btn-secondary'];

const SIZES = ['btn-medium', 'btn-large']

const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <div className='btn-card'>
         <button className={`custom-btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</button>
    </div>
  )
}

export default Button;