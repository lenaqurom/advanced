const express = require('express')
const router = express.Router()
const job = require('../models/job')
// get all jobs 
router.get('/jobs', function (req, res, next){
    job.find({}).then (function (jobs){
        res.send(jobs)

    }).catch(next)

})

// get one job 
router.get('/jobs/:id', function (req, res, next){
    job.findOne({_id: req.params.id }).then(function (job){
        res.send(job)

    }).catch(next)

})
// add new job 
router.post('/jobs', function (req, res, next){
    job.create(req.body)
    .then (function (job){
        res.send(job)

    }).catch(next)

})


// update job
router.put('/jobs/:id', function (req, res, next){
    job.findByIdAndUpdate({_id: req.params.id } , req.body )
    .then(function (job)
    {
        job.findOne({_id: req.params.id}).then(function (job)
        {

        res.send(job)
        })
    }).catch(next)

})

// delete job
router.delete('/jobs/:id', function (req, res, next){
    job.findByIdAndRemove({_id: req.params.id }).then(function (job){
        res.send(job)

    }).catch(next)

})

module.exports = router