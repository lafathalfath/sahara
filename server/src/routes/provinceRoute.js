const express = require('express')
const {
    getAllProvince,
    getProvinceById,
    storeProvince,
    updateProvince,
    destroyProvinceById
} = require('../controller/provinceController')

const router = express.Router()

router.get('/', getAllProvince)
router.get('/:id', getProvinceById)
router.post('/', storeProvince)
router.put('/:id', updateProvince)
router.delete('/:id', destroyProvinceById)

module.exports = router