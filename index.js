const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// init the app
const app = express()

// connect to mongodb
mongoose.connect('mongodb://localhost/job-board')
mongoose.Promise = global.Promise
app.use(bodyParser.json())


// init routes 
//app.use('/api', require('./routes/api'))

// error handling 
app.use(function (err, req, res,next){
    res.status(422).send({error: err.message})
})

app.listen(process.env.port || 4000 , function (){
    console.log('ready for reqest')
})
