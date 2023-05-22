const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../moduls/User');


const router = express.Router();
app.get('/api/logout',auth,function(req,res){
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });

});
module.exports = router;