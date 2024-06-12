import express from 'express';
import Story from '../models/Story.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const story = new Story({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });
  try {
    const newStory = await story.save();
    res.status(201).json(newStory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
