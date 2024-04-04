/** @format */

// Routes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Fitness from '../pages/Fitness';
import Login from '../pages/Login';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/contact" component={Contact} />  */}
    </Routes>
  );
}

export default AppRoutes;
