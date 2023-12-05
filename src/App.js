import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './component/home';
import About from './component/About';
import Contact from './component/contact';
import Adventures from './component/adventures';
import Register from './component/RegisterPage';
import Login from './component/LoginPage';
import Booking from './component/Book';
import Add from './component/add';
import Bookings from './component/Bookings';
function App() {
  return (
    <>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/add" element={<Add />} />
          {/* <Route path="/bb" element={<Bookings />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;

//1, date
// 2,quantity
// 3,
