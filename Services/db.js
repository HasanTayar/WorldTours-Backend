require('dotenv').config();  // to load environment variables from .env file
const mongoose = require('mongoose');

// use connection string from .env
const uri = process.env.MONGO || 'mongodb://localhost:27017/WorldTours';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});
