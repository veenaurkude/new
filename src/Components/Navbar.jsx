import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.Module.css';

function Navbar() {
  return (
    <div className="container">
        <div>
            <h2 style={{marginLeft : "20px"}}>UI Developer</h2>
        </div>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/game">Game</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
