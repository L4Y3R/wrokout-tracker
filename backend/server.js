require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req,res) =>{
    res.json({mesg: 'Welcome'})
})

app.listen(process.env.PORT, ()=>{
    console.log('Running on port', process.env.PORT)
})