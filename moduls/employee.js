const mongoose = require('mongoose');

// Define the schema for the Employers collection
const employerSchema = new mongoose.Schema({
  employerId: {
    type: String,
    required: true,
    unique: true
  },
  companyName: {
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
  additionalFields: {
    industry: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    },
    companyDescription: {
      type: String,
      required: true
    }
  }
});

// Create the Employers model based on the schema
const Employer = mongoose.model('employee', employerSchema);

module.exports = Employer;
