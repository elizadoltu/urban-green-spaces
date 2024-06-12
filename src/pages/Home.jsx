import React from 'react';
import Hero from '../components/Hero';
import FeaturedArticles from '../components/FeaturedArticles';
import CommunityStories from '../components/CommunityStories';
import NewsletterSignup from '../components/NewsletterSignup';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedArticles />
      <CommunityStories />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
