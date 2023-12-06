const express = require('express')
const mongoose = require('mongoose')

const nationRoute = require('./routes/nationRoute')

const app = express()

const dotenv = require('dotenv')
dotenv.config()
const port = process.env.SERVER_PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// app.use('/nation', nationRoute)

app.get('/', (req, res)=>{
    res.send('')
})


mongoose.connect('mongodb+srv://iqnaraidan12:o9GSabSOE6V9Ocgl@cluster0.rvlbkqu.mongodb.net/nation?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to database')
    app.listen(port, ()=>console.log(`Server running on: http://localhost:${port}`))
})
.catch(error=>console.log(error))