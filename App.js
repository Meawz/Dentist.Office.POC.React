import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Appointments from './components/Appointments';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/services" element ={<Services />} />
        <Route path="/contact" element ={<Contact />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/login" element ={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;