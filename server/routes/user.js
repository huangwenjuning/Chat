const express = require('express')
const router = express.Router()
const userController = require('./../controller/user')

router.post('/login', userController.login) // 登录

module.exports = router
