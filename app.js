const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();

const passport = require('passport');

//Cors
app.use(cors());

//Connect DB
connectDB();

// Use Passport JS middleware
app.use(passport.initialize());
// Import routes
const authRoute = require('./routes/api/auth');
const profileRoute = require('./routes/api/profile');

// Parsing request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define routes
app.use('/api/user', authRoute);
app.use('/api/profile', profileRoute);

// Error Handling Middleware
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
