const express = require('express')
const bookController = require('./../controllers/bookController')


const route = express.Router()


route.post('/add', bookController.addBook)
route.get('/books', bookController.getAllBooks)
module.exports = route