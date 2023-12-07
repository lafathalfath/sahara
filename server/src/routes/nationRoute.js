const express = require('express')
const nationController = require('../controller/nationController')

const router = express.Router()

router.get('/', nationController.getAllNation)
router.get('/:id', nationController.getNationById)
router.post('/', nationController.storeNation)
router.put('/:id', nationController.updateNation)
router.delete('/:id', nationController.destroyNationById)

module.exports = router