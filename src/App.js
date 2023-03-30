// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Game from './Components/Game';
import Login from './Components/Login';
import Register from './Components/Register';


export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}>
          {' '}
        </Route>

        <Route path="/about" element={<About />}>
          {' '}
        </Route>
        
        <Route path="/login" element={<Login />}>
          {' '}
        </Route>

        <Route path="/register" element={<Register />}>
          {' '}
        </Route>

        <Route path="/game" element={<Game />}>
          {' '}
        </Route>
      </Routes>
      {/* </Navbar> */}
    </div>
  );
}

