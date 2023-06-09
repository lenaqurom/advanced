// Import necessary modules and models
const express = require('express');
const router = express.Router();
const User = require('../moduls/User');

// Define the registration route
router.post('/registration', async (req, res, next) => {
  try {
    // Extract user information from the request body
    const { username, email, password } = req.body;

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send a response indicating successful registration
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    // Handle any errors that occur during registration
    next(error);
  }
});

module.exports = router;
