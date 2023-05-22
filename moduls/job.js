const mongoose = require('mongoose');

// Define the schema for the Job collection
const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  salaryRange: {
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  employerId: {
    type: String,
    required: true
  }
});

// Create the Job model based on the schema
const Job = mongoose.model('jobs', jobSchema);

module.exports = Job;
