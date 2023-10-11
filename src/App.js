import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header";

import Home from "./component/home";
import About from "./component/About";
import Contact from "./component/contact";
import Adventures from "./component/adventures";
function App() {
  return (
    <>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adventures" element={<Adventures />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
