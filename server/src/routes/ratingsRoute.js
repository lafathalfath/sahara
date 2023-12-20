const express = require('express')
const router = express.Router()
const {getAllRatings, getRatingById, storeRating, updateRating, deleteRatingById} = require('../controller/ratingsController')

router.get('/', getAllRatings)
router.get('/:id', getRatingById)
router.post('/', storeRating)
router.put('/:id', updateRating)
router.delete('/:id', deleteRatingById)

module.exports = router