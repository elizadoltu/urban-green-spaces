import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommunityStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/stories')
      .then(response => {
        setStories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the community stories!', error);
      });
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Community Stories</h2>
        <div className="grid grid-cols-3 gap-6">
          {stories.map(story => (
            <div key={story._id} className="bg-white p-4 shadow">
              <img src={story.image} alt={story.title} className="mb-4" />
              <h3 className="text-xl font-bold">{story.title}</h3>
              <p className="mt-2">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStories;
