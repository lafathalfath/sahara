const express = require('express')
const router = express.Router()
const {getAllFavorites, getFavoriteById, storeFavorite, deleteFavoriteById} = require('../controller/favoritesController')

router.get('/', getAllFavorites)
router.get('/:id', getFavoriteById)
router.post('/', storeFavorite)
router.delete('/:id', deleteFavoriteById)

module.exports = router