import Article from './models/Article.js';
import Story from './models/Story.js';

const populateDatabase = async () => {
  try {
    const articlesData = [
      {
        title: 'The Benefits of Urban Green Spaces',
        description: 'Explore the numerous benefits that urban green spaces offer to residents and the environment.',
        image: 'article1.jpg'
      },
      // Add more sample articles as needed
    ];

    const storiesData = [
      {
        title: 'My Experience with Rooftop Gardening',
        description: 'Read about my journey of transforming a barren rooftop into a lush green oasis.',
        image: 'story1.jpg'
      },
      // Add more sample stories as needed
    ];

    await Article.insertMany(articlesData);
    await Story.insertMany(storiesData);

    console.log('Sample data inserted successfully.');
  } catch (error) {
    console.error('Error populating database:', error);
  }
};

export default populateDatabase;
