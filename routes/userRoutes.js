const express = require('express')
const userController = require('./../controllers/userController')
const router = express.Router()
router.post('/signIn', userController.signIn)
router.post('/login', userController.login)

module.exports = router
