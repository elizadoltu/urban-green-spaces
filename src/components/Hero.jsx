import React from 'react';

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-96 text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Welcome to GreenCity</h2>
        <p className="mt-4">Join the movement to green our cities!</p>
        <button className="mt-6 px-4 py-2 bg-green-600 rounded">Join Now</button>
      </div>
    </section>
  );
};

export default Hero;
