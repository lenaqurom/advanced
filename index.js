const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// init the app
const app = express()

// connect to mongodb
app.use(bodyParser.json())


// init routes 
//app.use('/api', require('./routes/api'))



app.listen(process.env.port || 4000, function (){
    console.log('ready for reqest')
})
