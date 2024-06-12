import express from 'express';
import Article from '../models/Article.js';
import Story from '../models/Story.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });
  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/populate-database', async (req, res) => {
  try {
    await populateDatabase();
    res.status(200).send('Sample data populated successfully.');
  } catch (error) {
    console.error('Error populating database:', error);
    res.status(500).send('Failed to populate database.');
  }
});

export default router;
