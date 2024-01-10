const express = require('express')
const router = express.Router()
const {getAllCart, getCartById, storeCart, deleteCartById} = require('../controller/cartController')

router.get('/', getAllCart)
router.get('/:id', getCartById)
router.post('/', storeCart)
router.delete('/:id', deleteCartById)

module.exports = router