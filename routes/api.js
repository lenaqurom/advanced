const express = require('express')
const router = express.Router()

// get all jobs 
router.get('/jobs', function (req, res, next){
    console.log('lets go fetch jobs')
    res.send('see all jobs here')
})

// get one job 
//router.get 

// add new job 
//router.post

// update job
//router.put

// delete job
//router.delete