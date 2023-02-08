const express = require('express')
const dotenv = require('dotenv')
const bookRoutes = require('./routes/bookRoutes')
const app = express()
const mongoose = require('mongoose')
dotenv.config()
mongoose.connect(process.env.LINK, () => {
    console.log('connected with mongoose')
})

app.use(express.json())

app.use('/', bookRoutes)
app.listen(process.env.PORT, () => {
    console.log(`the server has been started on ${process.env.PORT}`)
})

