import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import "./App.css";
import "./Navbar.css";
import "./components/Footer.css";  
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/portfolio-project">
      <div className="app-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;








