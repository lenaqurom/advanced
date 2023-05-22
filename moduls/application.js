const mongoose = require('mongoose');

// Define the schema for the Job Application collection
const applicationSchema = new mongoose.Schema({
  applicationId: {
    type: String,
    required: true
  },
  jobId: {
    type: String,
    required: true
  },
  applicantName: {
    type: String,
    required: true
  },
  contactDetails: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  resume: {
    type: String,
    required: true
  },
  coverLetter: {
    type: String,
    required: true
  },
  applicationDate: {
    type: Date,
    required: true
  },
  applicationStatus: {
    type: String,
    required: true
  }
});

// Create the Application model based on the schema
const Application = mongoose.model('application', applicationSchema);

module.exports = Application;
