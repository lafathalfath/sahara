const express = require('express')
const router = express.Router()
const {getAllFavorites, getFavoriteById, storeFavorite, updateFavorite, deleteFavoriteById} = require('../controller/favoritesController')

router.get('/', getAllFavorites)
router.get('/:id', getFavoriteById)
router.post('/', storeFavorite)
router.put('/:id', updateFavorite)
router.delete('/:id', deleteFavoriteById)

module.exports = router