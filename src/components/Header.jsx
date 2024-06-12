import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="GreenCity Logo" className="mr-2" />
          <h1 className="text-xl font-bold">GreenCity</h1>
        </div>
        <nav>
          <Link to="/" className="mx-2 hover:underline">Home</Link>
          <Link to="/about" className="mx-2 hover:underline">About</Link>
          <Link to="/green-spaces" className="mx-2 hover:underline">Green Spaces</Link>
          <Link to="/community" className="mx-2 hover:underline">Community</Link>
          <Link to="/resources" className="mx-2 hover:underline">Resources</Link>
          <Link to="/contact" className="mx-2 hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
