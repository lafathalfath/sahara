const express = require('express')
const router = express.Router()
const {tokenHandler, authenticateToken} = require('../middleware/authenticateToken')

router.post('/token', tokenHandler),
router.post('/login', authenticateToken)

module.exports = router