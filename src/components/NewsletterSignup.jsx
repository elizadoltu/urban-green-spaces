import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="py-8 bg-green-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Subscribe to our newsletter for the latest updates on urban green spaces.</p>
        <form className="flex justify-center">
          <input type="email" className="p-2 rounded-l-md" placeholder="Enter your email" />
          <button className="px-4 py-2 bg-green-600 rounded-r-md">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
