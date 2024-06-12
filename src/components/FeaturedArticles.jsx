import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/articles')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the articles!', error);
      });
  }, []);

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-3 gap-6">
          {articles.map(article => (
            <div key={article._id} className="bg-white p-4 shadow">
              <img src={article.image} alt={article.title} className="mb-4" />
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="mt-2">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
