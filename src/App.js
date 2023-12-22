import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";


import Home from './component/home';
import About from './component/About';
import Contact from './component/contact';
import Adventures from './component/adventures';
import Register from './component/RegisterPage';
import Login from './component/LoginPage';
import Booking from './component/Book';
import Add from './component/add';
import Bookings from './component/Bookings';
import axios from "axios"
import Aaa from './component/Aaa';

function App() {
  const [loginoggedIn, setLoginoggedIn] = useState(false);
  const runner = async () => {
    try {
      const response = await axios.get("http://localhost:3001/user", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status == 200) {
        setLoginoggedIn(true)
      }
    } catch (e) {
      setLoginoggedIn(false)
    }

  };

  useEffect(() => {
    runner();
  }, []);
  return (
    <>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={loginoggedIn ? <About /> : <Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adventures" element={<Adventures />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={loginoggedIn ? <Booking /> : <Login />} />
          <Route path="/add" element={<Add />} />
          <Route path="/aa" element={<Aaa />} />
          {/* <Route path="/bb" element={<Bookings />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
