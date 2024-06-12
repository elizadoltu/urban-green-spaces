import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Contact from './pages/Contact';
import GreenSpaces from './pages/GreenSpaces';
import Resources from './pages/Resources';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/green-spaces" element={<GreenSpaces />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
