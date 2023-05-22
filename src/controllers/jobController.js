const JobModel = require('../models/job');

const createJob = async (req, res) => {
    const { title, employee } = req.body;

    const newJob = await JobModel.create({ title, employee });
    res.json(newJob);
};
const getAllJobs = async (req, res) => {
    const allJobs = await JobModel.find()

    res.json(allJobs)
}
const updateJob = async (req, res) => {
    const {jobId} = req.params
    const {title, employee} = req.body
    const updatedJob = await JobModel.findByIdAndUpdate(jobId, {
        title,
        employee,
    })
    res.json(updatedJob)
}

module.exports = {
    createJob,
    getAllJobs,
    updateJob,
}