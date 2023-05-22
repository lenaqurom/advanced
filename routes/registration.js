// Import necessary modules and models
const express = require('express');
const router = express.Router();
const User = require('../moduls/User');
const bcryptjs = require('bcryptjs');

// Define the registration route
router.post('/registration', async (req, res, next) => {
  try {
    // Extract user information from the request body
    const { username, email, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 6);

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password : hashedPassword,
      
    });

    router.post("/tokenIsValid", async (req, res) => {
      try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) return res.json(false);
    
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        res.json(true);
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
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