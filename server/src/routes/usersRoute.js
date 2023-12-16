const express = require('express')
const { getAllUsers, storeUser } = require('../controller/usersControllers')
const router = express.Router()

router.get('/', getAllUsers)
router.post('/', storeUser)

module.exports = router