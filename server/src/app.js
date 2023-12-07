//imports
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.SERVER_PORT || 3000
const bodyParser = require('body-parser')
const errorMiddleware = require('./middleware/errorMiddleWare')
const cors = require('cors')

const nationRoute = require('./routes/nationRoute')
//end imports

const corsOptions = {
    origin: process.env.FRONT_END,
    optionSuccessStatus: 200
}

//use method on libraries
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions))
//end

//routes
app.use('/api/nation', nationRoute)

app.get('/', (req, res)=>{
    res.send('hello user!')
})
//end routes

app.use(errorMiddleware)

//connection
mongoose.connect(process.env.DB_HOST)
.then(()=>{
    console.log('Connected to database')
    app.listen(port, ()=>console.log(`Server running on: http://localhost:${port}`))
})
.catch(error=>console.log(error))
//end connection