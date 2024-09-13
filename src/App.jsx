// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Home from './components/Home';
import Invest from './components/Invest'
import PaymentGatway from './components/PaymentGatway';
import Location from './components/Location';
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>

      <div className="app">
        {/* Fixed Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full bg-white  p-4 flex justify-between items-center px-4 md:px-16 z-[9999]">
  {/* Logo */}
  <div className="logo text-xl font-bold">
    <Link className='text-emerald-600' to="/">Grow Together</Link>
  </div>

  {/* Hamburger Menu for Mobile */}
  <div className="md:hidden">
    <button onClick={toggleMobileMenu} className="text-gray-600">
      <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
    </button>
  </div>

  {/* Navigation Links (Hidden on Mobile, Visible on Desktop) */}
  <div
    className={`nav-links md:flex items-center justify-start gap-7 fixed md:static top-16 left-0 w-full h-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-transform duration-300 ease-in-out md:text-[1rem] md:flex md:flex-row text-3xl flex flex-col ${
      isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
    } md:translate-y-0`}
    style={{ transitionProperty: 'transform, background-color' }}
  >
    <Link className="font-[600]" to="/" onClick={toggleMobileMenu}>
      Home
    </Link>
    <Link to="/invest" onClick={toggleMobileMenu}>
      ROI
    </Link>
    
 
   <h1 className='md:hidden text-emerald-600 text-5xl font-semibold'>Grow Together</h1>
    {/* Search Input (Only Visible on Desktop) */}
    <div className="relative flex items-center hidden md:flex">
      <FontAwesomeIcon icon={faSearch} className="absolute left-3 text-gray-400" />
      <input
        className="px-10 py-2 border border-gray-200 rounded-lg outline-none w-full"
        type="text"
        placeholder="Search for Properties"
      />
    </div>
  </div>
</nav>

        <div className="fixed z-[-1] h-screen w-full bg-[#EBECF0] flex items-center justify-start flex-col">
  <div className="h-full w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[5rem] p-6">
    {/* Social Links Section */}
    <div className="w-full md:w-[30%] h-auto md:h-[40vh] flex flex-col items-start justify-center gap-4 p-4">
      <a className="text-xl md:text-[2rem] hover:underline" href="/">
        Instagram
      </a>
      <a className="text-xl md:text-[2rem] hover:underline" href="/">
        Twitter
      </a>
      <a className="text-xl md:text-[2rem] hover:underline" href="/">
        Gmail
      </a>

      <p className="text-sm md:text-base mt-4">
        © 2024 Luxus Residenz. All rights reserved.
      </p>
    </div>

    {/* Navigation Links Section */}
    <div className="w-full md:w-[30%] h-auto md:h-[40vh] flex flex-col items-start justify-center gap-4 text-xl md:text-[2rem] p-4">
      <Link className="hover:underline" to="/" onClick={toggleMobileMenu}>
        Home
      </Link>
      <Link className="hover:underline" to="/about" onClick={toggleMobileMenu}>
        ROI
      </Link>
      <Link className="hover:underline" to="/paymentRazorpay" onClick={toggleMobileMenu}>
        Invest
      </Link>
      <Link className="hover:underline" to="/location" onClick={toggleMobileMenu}>
        Location
      </Link>
    </div>
  </div>

  {/* Scrolling Text Section */}
  <div className="h-[40vh] w-full flex items-center justify-center overflow-hidden">
    <div className="wrapper text-4xl md:text-[8rem] flex items-center justify-center flex-shrink-0 gap-10 whitespace-nowrap">
      <h1 className="font-sans font-bold text-white">GROW TOGETHER</h1>
      <h1 className="font-sans font-bold text-white">GROW TOGETHER</h1>
      <h1 className="font-sans font-bold text-white">GROW TOGETHER</h1>
      <h1 className="font-sans font-bold text-white">GROW TOGETHER</h1>
      <h1 className="font-sans font-bold text-white">GROW TOGETHER</h1>
      <h1 className="font-sans font-bold text-white">GROW TOGETHER</h1>
      <h1 className="font-sans font-bold text-white">GROW TOGETHER</h1>
      <h1 className="font-sans font-bold text-white">GROW TOGETHER</h1>
    </div>
  </div>
</div>

        {/* Content */}
        <div className="content mt-20 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/location" element={<Location />} />
            <Route path="/paymentRazorpay" element={<PaymentGatway />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
