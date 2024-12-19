import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import packageRoutes from './routes/packageRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // Built-in middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // Built-in middleware to parse URL-encoded data

// Routes
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import Package from './models/Package.js';

app.get('/api/seed', async (req, res) => {
  const samplePackages = [
    { title: 'Beach Getaway', description: 'Relax at the beautiful sunny beach.', price: 200 },
    { title: 'Mountain Adventure', description: 'Hiking and exploring the mountains.', price: 300 },
    { title: 'City Tour', description: 'Explore vibrant city life.', price: 150 },
  ];
  try {
    await Package.deleteMany(); // Clear existing data
    const insertedPackages = await Package.insertMany(samplePackages);
    res.status(201).json(insertedPackages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to seed data' });
  }
});