import React,{useState} from 'react';
import './dropdown.css'
import { IconContext } from 'react-icons';
import { IoIosArrowDown } from 'react-icons/io';


const Dropdown = ({heading, icon, children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='dropdown'>
        <div className="dropdown-header">
            <span className='drop-icon'>{icon}</span>
            <span className='drop-title'>{heading}</span>
            <IconContext.Provider value={{size:'2rem', className:'dropdown-arrow'}} >
               <IoIosArrowDown className={isOpen ? 'open' : ''}  onClick={toggleDropdown} />
            </IconContext.Provider>
        </div>
        { isOpen && <div className='dropdown-content'>{children}</div> }
    </div>
  )
}

export default Dropdown;