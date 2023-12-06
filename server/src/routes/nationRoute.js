const express = require('express')
const NationController = require('../controller/nationController')

const router = express.Router()

router.get('/', NationController.getAllNation)
router.get('/:id', NationController.getNationById)
router.post('/', NationController.storeNation)
router.put('/:id', NationController.updateNation)
router.delete('/:id', NationController.destroyNationById)