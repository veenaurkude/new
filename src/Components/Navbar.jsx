import React from 'react';

import { NavLink } from 'react-router-dom';
import './Navbar.Module.css';

function Navbar() {
  return (
    <div className='container'>

      <div className="logo">
        <h4>UI/UX Design</h4>
      </div>

        <div className='navbar'>
        <ul>
        <li><NavLink to ='/'>Home</NavLink></li>
        <li><NavLink to ='/About'>About Us</NavLink></li>
        <li><NavLink to ='/Login'>Login</NavLink></li>
        </ul>
          
          
         
        </div>
      
    </div>
  );
}
export default Navbar;

