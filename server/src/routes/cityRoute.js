const express = require('express')
const router = express.Router()
const {
    getAllCity,
    getCityById,
    storeCity,
    updateCity,
    destroyCityById
} = require('../controller/cityController')

router.get('/', getAllCity)
router.get('/:id', getCityById)
router.post('/', storeCity)
router.put('/:id', updateCity)
router.delete('/:id', destroyCityById)

module.exports = router