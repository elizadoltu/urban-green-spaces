import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-xl font-bold">GreenCity</h3>
          <p className="mt-2">Making cities greener, one space at a time.</p>
        </div>
        <nav>
          <Link to="/" className="block mt-2 hover:underline">Home</Link>
          <Link to="/about" className="block mt-2 hover:underline">About</Link>
          <Link to="/green-spaces" className="block mt-2 hover:underline">Green Spaces</Link>
          <Link to="/community" className="block mt-2 hover:underline">Community</Link>
          <Link to="/resources" className="block mt-2 hover:underline">Resources</Link>
          <Link to="/contact" className="block mt-2 hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
