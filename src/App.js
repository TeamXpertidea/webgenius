// import logo from './logo.svg';
import './App.css';

// import Body from './templates/Body';

import Home from './templates/pages/Home';
import About from './templates/pages/About';
import Contact from './templates/pages/Contact';
import NotFound from './templates/pages/NotFound';
// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

import React from 'react';
import Navbar from './templates/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />  
      <Routes >
      <Route path="/" element={ <Home /> } />
      {/* <Route path="/blog" element={ <Blog /> } /> */}
      {/* <Route path="/team" element={ <Team /> } /> */}
      <Route path="/about" element={ <About /> } />
      {/* <Route path="/services" element={ <Services /> } /> */}
      <Route path="/contact" element={ <Contact /> } />
      <Route component={NotFound} />
    </Routes>
    </div>
  );
}

export default App;
