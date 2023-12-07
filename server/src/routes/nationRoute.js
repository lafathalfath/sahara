const express = require('express')
const {
    getAllNation,
    getNationById,
    storeNation,
    updateNation,
    destroyNationById
} = require('../controller/nationController')

const router = express.Router()

router.get('/', getAllNation)
router.get('/:id', getNationById)
router.post('/', storeNation)
router.put('/:id', updateNation)
router.delete('/:id', destroyNationById)

module.exports = router