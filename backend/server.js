//backend web framework here
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/error')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

//to add middleware like body data 28:00
//express calls a body parser for json
app.use(express.json())

app.use(express.urlencoded({extended: false}))

//if u access former, you access latter
app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log('Server started on port ${port}'))