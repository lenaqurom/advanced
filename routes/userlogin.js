const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../moduls/User');
const router = express.Router();
const bcryptjs = require('bcryptjs');


// Define the login route
router.post('/userlogin', async (req, res, next) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ username });

  if(!user){
      return res.status(400).json({msg : "User with this username does not exit !"});
  }

  const isMatch = await bcryptjs.compare(password, user.password);
  if(isMatch){
    return res.status(200).json({msg : "Succefull LOGIN, correct password!"});
}

  if(!isMatch){
      return res.status(400).json({msg : "Incorrect password!"});
  }

  const token = jwt.sign({id: user._id}, "passwordKey");

  res.json({token});

}

)


// Export the router
module.exports = router;