const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Confirm database key is defined
    const dbURI = process.env.MONGO_URI;
    if (!dbURI) {
      console.error('MONGO_URI is not defined in your .env file');
      process.exit(1);
    }

    await mongoose.connect(dbURI);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    // Exit process if connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
