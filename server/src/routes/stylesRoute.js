const express = require('express')
const router = express.Router()
const { getAllStyles, getStylesById, storeStyles, updateStyles, deleteStyles } = require('../controller/stylesController')

router.get('/', getAllStyles)
router.get('/:id', getStylesById)
router.post('/', storeStyles)
router.put('/:id', updateStyles)
router.delete('/:id', deleteStyles)

module.exports = router