const express = require('express')
const router = express.Router()
const {tokenHandler, loginHandler} = require('../middleware/authenticateToken')

router.post('/token', tokenHandler),
router.post('/login', loginHandler)

module.exports = router