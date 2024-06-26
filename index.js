//Import Express Mongoose and CORS
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const coursesRouter = require('./routes/coursesRouter')

//Create an Express App
const app = express()

//Use CORS Middleware
app.use(cors({
    origin:"*",
    method:"*",
    allowedHeaders:"*",
    exposedHeaders:"*"
}))

app.use('/courses',coursesRouter)

//Connect MongoDB Atlas and run in PORT 8000
const connectToDbAndStart = async () =>{
    await mongoose.connect('mongodb+srv://amtulrahmansadiya:eIK1BZVHr27CUmtC@cluster0.ybjbtjb.mongodb.net/students-courses-db?retryWrites=true&w=majority')

    console.log('Connected to DB')
    //app.listen
    app.listen(8000)
}
connectToDbAndStart()

//Insert nodemon script to package.json file and run te app
