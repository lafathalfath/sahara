const express = require('express');
const router = express.Router()
const {getAllProducts, getProductById, storeProduct, updateProduct, deleteProductById} = require('../controller/productController')

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', storeProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProductById)

module.exports = router