import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import packageRoutes from './routes/packageRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import cors from 'cors';

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to MongoDB

const app = express();

// CORS Configuration
const corsOptions = {
  origin: ['https://travel-agency-frontend-eight.vercel.app'], 
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions)); // Enable CORS with options
app.use(express.json()); // Built-in middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // Built-in middleware to parse URL-encoded data

// Routes
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);

// Default Route for Render Root Path
app.get('/', (req, res) => {
  res.send('Travel Agency Backend is running...');
});

// Seed Data Route
import Package from './models/Package.js';
app.use('/images', express.static('public/images'));

app.get('/api/seed', async (req, res) => {
  const samplePackages = [
    {
      title: 'Beach Getaway',
      description: 'Relax at the beautiful sunny beach.',
      price: 200,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/beach.jpg',
    },
    {
      title: 'Mountain Adventure',
      description: 'Hiking and exploring the mountains.',
      price: 300,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/mountain.jpg',
    },
    {
      title: 'City Tour',
      description: 'Explore vibrant city life.',
      price: 150,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/city.jpg',
    },
    {
      title: 'Safari Expedition',
      description: 'Experience wildlife up close.',
      price: 400,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/safari.jpg',
    },
    {
      title: 'Desert Escape',
      description: 'Discover the beauty of endless sand dunes.',
      price: 250,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/desert.jpg',
    },
    {
      title: 'Island Paradise',
      description: 'Unwind on a remote island surrounded by crystal-clear waters.',
      price: 500,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/island.jpg',
    },
    {
      title: 'Historical Journey',
      description: 'Dive into the rich history of ancient landmarks.',
      price: 350,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/history.jpg',
    },
    {
      title: 'Rainforest Retreat',
      description: 'Immerse yourself in lush greenery and exotic wildlife.',
      price: 450,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/rainforest.jpg',
    },
    {
      title: 'Tropical Escape',
      description: 'Bask in the warmth of golden beaches and tropical vibes.',
      price: 550,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/tropical.jpg',
    },    
    {
      title: 'Luxury Cruise',
      description: 'Sail away in style on a world-class luxury cruise.',
      price: 1000,
      image: 'https://travel-agency-backend-3yhw.onrender.com/images/cruise.jpg',
    },
  ];
  
  
  try {
    await Package.deleteMany(); // Clear existing data
    const insertedPackages = await Package.insertMany(samplePackages);
    res.status(201).json(insertedPackages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to seed data' });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
