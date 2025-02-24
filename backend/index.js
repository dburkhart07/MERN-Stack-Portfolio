const express = require('express');
const cors = require('cors'); 
const connectDB = require('./db'); 
const projectRoutes = require('./routes/project'); 
const experienceRoutes = require('./routes/experience');
const songRoutes = require('./routes/song')
const contactRoutes = require('./routes/contact');
require('dotenv').config();

const app = express();

const allowedOrigins = [
  'https://dalton-burkhart.onrender.com',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Connect to MongoDB
connectDB();

// Middleware (Parse JSON requests)
app.use(express.json());

// API Routes
app.use('/api/projects', projectRoutes); 
app.use('/api/experience', experienceRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/contact', contactRoutes);

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
