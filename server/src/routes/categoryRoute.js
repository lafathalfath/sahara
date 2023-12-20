const express = require('express')
const router = express.Router()
const { getAllCategory, getCategoryById, storeCategory, updateCategory, deleteCategoryById } = require('../controller/categoryController')

router.get('/', getAllCategory)
router.get('/:id', getCategoryById)
router.post('/', storeCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategoryById)

module.exports = router