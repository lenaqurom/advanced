const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

const userLogout = (req, res) => {
  // Get the token from the request header
  const token = req.headers.authorization;

  if (!token) {
    // If no token is provided, return an error response
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    // Verify the token and decode its payload
    const decoded = jwt.verify(token, secretKey);

    // Return a success response
    return res.json({ message: 'User logout successful' });
  } catch (error) {
    // If the token is invalid or expired, return an error response
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = userLogout;
