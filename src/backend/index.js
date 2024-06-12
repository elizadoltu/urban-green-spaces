import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import articleRoutes from './routes/articles.js';
import storyRoutes from './routes/stories.js';
import populateDatabaseRoute from './routes/populateDatabaseRoute.js'; // Correct the import

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/urban-green-spaces', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/articles', articleRoutes);
app.use('/stories', storyRoutes);
app.use('/populate-database', populateDatabaseRoute); // Use the correct route

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
