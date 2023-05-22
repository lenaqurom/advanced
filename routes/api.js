const express = require('express');
const router = express.Router();
const job = require('../moduls/job');



// Create a new job
router.post('/jobs', function(req, res, next) {
   job.create(req.body)
     .then(function(job) {
       res.status(201).send(job);
     })
     .catch(next);
 });



//get all jobs
router.get('/jobs', function(req, res ,next){
   job.find({}).then(function(jobs){
    res.send(jobs)
    }).catch(next)
   
});

// Job search
router.get('/jobs/search', function(req, res, next) {
   const { title, minSalary, maxSalary } = req.query;
 
   // Build the search query based on the provided filters
   const query = {};
 
   if (title) {
     query.jobTitle = { $regex: title, $options: 'i' }; // Case-insensitive search by job title
   }
 
   if (minSalary && maxSalary) {
     query['salaryRange.min'] = { $gte: parseInt(minSalary) };
     query['salaryRange.max'] = { $lte: parseInt(maxSalary) };
   } else if (minSalary) {
     query['salaryRange.min'] = { $gte: parseInt(minSalary) };
   } else if (maxSalary) {
     query['salaryRange.max'] = { $lte: parseInt(maxSalary) };
   }
 
   // Perform the search query
   job.find(query)
     .then(function(jobs) {
       res.send(jobs);
     })
     .catch(next);
 });
 
//get one job
router.get('/jobs/:id', function(req, res, next){
   job.findOne({_id: req.params.id})
   .then(function(job){
      res.send(job);
   }).catch(next);
});

// ...

//update job
//router.put
router.put('/jobs/:id', function(req, res, next){
   job.findByIdAndUpdate({_id: req.params.id}, req.body)
   .then(function(){
      job.findOne({_id: req.params.id})
      .then(function(job){
         res.send(job);
      });
   }).catch(next);
});

// ...

//delete job
router.delete('/jobs/:id', function(req, res, next){
   job.findByIdAndRemove({_id: req.params.id})
   .then(function(job){
      res.send(job);
   }).catch(next);
});

// api.js

// ...

// Job search
router.get('/jobs', function(req, res, next) {
  const { id, title, minSalary, maxSalary } = req.query;

  // Build the search query based on the provided filters
  const query = {};

  if (id) {
    query._id = id; // Search by job ID
  }

  if (title) {
    query.jobTitle = { $regex: title, $options: 'i' }; // Case-insensitive search by job title
  }

  if (minSalary && maxSalary) {
    query['salaryRange.min'] = { $gte: parseInt(minSalary) };
    query['salaryRange.max'] = { $lte: parseInt(maxSalary) };
  } else if (minSalary) {
    query['salaryRange.min'] = { $gte: parseInt(minSalary) };
  } else if (maxSalary) {
    query['salaryRange.max'] = { $lte: parseInt(maxSalary) };
  }

  // Perform the search query
  Job.find(query)
    .then(function(jobs) {
      res.send(jobs);
    })
    .catch(next);
});

// ...


// Search for a job by ID
router.get('/jobs/:id', function(req, res, next) {
  const jobId = req.params.id;

  // Find the job by ID
  Job.findById(jobId)
    .then(function(job) {
      if (!job) {
        // If the job is not found, return an error response
        return res.status(404).json({ error: 'Job not found' });
      }

      // If the job is found, return it in the response
      res.json(job);
    })
    .catch(next);
});


router.get('/jopfilter', async (req, res, next) => {
   try {
     // Retrieve search filters from the request query parameters
     const { jobTitle, requirements, minSalary, maxSalary } = req.query;
 
     // Build the search query based on the provided filters
     const searchQuery = {};
 
     if (jobTitle) {
       searchQuery.jobTitle = { $regex: jobTitle, $options: 'i' };
     }
 
     if (requirements) {
       searchQuery.requirements = { $regex: requirements, $options: 'i' };
     }
 
     if (minSalary || maxSalary) {
       searchQuery.salaryRange = {};
 
       if (minSalary) {
         searchQuery.salaryRange.min = { $gte: parseInt(minSalary) };
       }
 
       if (maxSalary) {
         searchQuery.salaryRange.max = { $lte: parseInt(maxSalary) };
       }
     }
 
     // Perform the search using the constructed query
     const searchResults = await job.find(searchQuery);
 
     // Send the search results as the response
     res.json(searchResults);
   } catch (error) {
     next(error);
   }
 });



module.exports = router;