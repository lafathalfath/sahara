const express = require('express')
const router = express.Router()
const {authenticateToken} = require('../middleware/authenticateToken')
const {tokenHandler, loginHandler, logoutHandler} = require('../controller/auth/authController')

router.post('/token', tokenHandler),
router.post('/login', loginHandler),
router.delete('/logout', authenticateToken, logoutHandler)

module.exports = router