const express = require('express')
const router = express.Router()
const {tokenHandler} = require('../middleware/authenticateToken')

router.post('/', tokenHandler)

module.exports = router