require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const workoutRouter = require('./routes/workouts')

const app = express()

//middleware
app.use(cors());
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRouter)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(process.env.PORT, ()=>{
            console.log('Connected & Running on port', process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })
