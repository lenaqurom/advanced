const express = require('express');
const mongoose = require('mongoose');
const db = require('./db')
const bodyparser = require('body-parser');
const userLogout = require('./routes/userlogout'); // Import the userLogout route

// Initialize the app
const app = express();


// Connect to MongoDB



// Middleware
app.use(bodyparser.json());

// Routes
app.use('/api', require('./routes/api'));
app.use('/api', require('./routes/jobApplications'));
app.use('/api', require('./routes/registration'));
app.use('/api', require('./routes/userlogin'));
app.use('/api', userLogout);

//error handling 
app.use(function (err, req ,res ,next){
  res.status(422).send({error: err.message})
})
// Start the server
const port = process.env.PORT || 4000;
app.listen(port, function() {
  console.log(`Server is running on port --- ${port}`);
});