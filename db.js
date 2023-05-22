const mongoose = require('mongoose')
mongoose
.connect(
    'mongodb+srv://leena:leenadeek123@cluster0.xkdejn9.mongodb.net/'
)
.then(() => {
    console.log('connect to db')
})
.catch(() =>{
    console.log('unable to connect to db')

})
