const express = require('express');
const router = express.Router();
const JobApplication = require('../moduls/application');

// Handle the job application submission
router.post('/jobApplications', async (req, res, next) => {
  try {
    const {
      applicationId,
      jobId,
      applicantName,
      contactDetails,
      resume,
      coverLetter,
      applicationDate,
      applicationStatus,
    } = req.body;

    // Create a new job application instance
    const jobApplication = new JobApplication({
      applicationId,
      jobId,
      applicantName,
      contactDetails,
      resume,
      coverLetter,
      applicationDate,
      applicationStatus,
    });

    // Save the job application to the database
    const savedJobApplication = await jobApplication.save();

    res.json(savedJobApplication);
  } catch (error) {
    next(error);
  }
});

// Get job application by ID
router.get('/jobApplications/:id', async (req, res, next) => {
    try {
      const applicationId = req.params.id;
      const application = await JobApplication.findById(applicationId);

      if (!application) {
        return res.status(404).json({ error: 'Job application not found' });
      }

      res.json(application);
    } catch (error) {
      next(error);
    }
  });



  // Update a job application
router.put('/applications/:id', async (req, res, next) => {
    try {
      const applicationId = req.params.id;
      const updatedApplicationData = req.body;

      const updatedApplication = await JobApplication.findByIdAndUpdate(applicationId, updatedApplicationData, {
        new: true,
      });

      if (!updatedApplication) {
        return res.status(404).json({ error: 'Application not found' });
      }

      res.json(updatedApplication);
    } catch (error) {
      next(error);
    }
  });
  // Delete a job application
router.delete('/applications/:id', async (req, res, next) => {
    try {
      const applicationId = req.params.id;

      const deletedApplication = await JobApplication.findByIdAndDelete(applicationId);

      if (!deletedApplication) {
        return res.status(404).json({ error: 'Application not found' });
      }

      res.json({ message: 'Application deleted successfully' });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;