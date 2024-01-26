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

const authenticationRoute = require('./routes/authenticationRoute')
const usersRoute = require('./routes/usersRoute')
const cityRoute = require('./routes/cityRoute')
const provinceRoute = require('./routes/provinceRoute')
const nationRoute = require('./routes/nationRoute')
const categoryRoute = require('./routes/categoryRoute')
const stylesRoute = require('./routes/stylesRoute')
const productRoute = require('./routes/productRoute')
const ratingsRoute = require('./routes/ratingsRoute')
const favoritesRoute = require('./routes/favoritesRoute')
const cartRoute = require('./routes/cartRoute')
const transactionRoute = require('./routes/transactionRoute')
const { authenticateToken } = require('./middleware/authenticateToken')
const multer = require('multer')
const fs = require('fs-extra')
// const a = require('node:fs')
//end imports

// cors handler
const corsOptions = {
    origin: process.env.FRONT_END,
    optionSuccessStatus: 200
}
// end cors handler

//use method on libraries
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions))
//end


//routes
app.get('/', (req, res)=>{
    res.send('hello user!')
})

app.use('/auth', authenticationRoute)
app.use('/api/users', authenticateToken, usersRoute)
app.use('/api/city', cityRoute)
app.use('/api/province', provinceRoute)
app.use('/api/nation', nationRoute)
app.use('/api/category', categoryRoute)
app.use('/api/style', stylesRoute)
app.use('/api/product', productRoute)
app.use('/api/rating', authenticateToken, ratingsRoute)
app.use('/api/favorite', authenticateToken, favoritesRoute)
app.use('/api/cart', authenticateToken, cartRoute)
app.use('/api/transaction', authenticateToken, transactionRoute)

// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         const path = `./src/storage/products/${req.body.product_name}/${file.fieldname}`
//         fs.mkdirsSync(path)
//         cb(null, path)
//     },
//     filename: (req, file, cb)=>{
//         const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
//         cb(null, `${uniqueSuffix}${file.originalname.substr(-4)}`)
//     }
// })

// const upload = multer({ storage: storage })
// const fUpload = upload.fields([
//     {name: 'photo_product', maxCount: 100},
//     {name: 'file_psd', maxCount: 1},
//     {name: 'mockup', maxCount: 100}
// ])
// app.post('/api/upload', fUpload, (req, res, next)=>{
//     let filePath = []
//     req.files.photo_product.map(item=>filePath.push(item.path))
//     res.json({message: 'sukses', file: filePath})
// })

//end routes

//middleware
app.use(errorMiddleware)
//end middleware

//connection
mongoose.connect(process.env.DB_HOST)
.then(()=>{
    console.log('Connected to database')
    app.listen(port, ()=>console.log(`Server running on: http://localhost:${port}`))
})
.catch(error=>console.log(error))
//end connection