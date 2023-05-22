const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../moduls/User');
const router = express.Router();


// Define the login route
router.post('/userlogin', async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Retrieve user from the database
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, config.secretKey, { expiresIn: '1h' });

    // Return JWT to the client
    res.json({ token });
  } catch (error) {
    next(error);
  }
});




// Export the router
module.exports = router;