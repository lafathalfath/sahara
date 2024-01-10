const asyncHandler = require('express-async-handler')
const Favorites = require('../models/Favorites')
const Users = require('../models/Users')
const Product = require('../models/Product')

const getAllFavorites = asyncHandler(async(req, res)=>{
    try {
        const user = await Users.findOne({username: req.user.username})
        const favovrite = await Favorites.find({user: user._id})
        res.status(200).json({payload: favovrite})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getFavoriteById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const user = await Users.findOne({username: req.user.username})
        const favorite = await Favorites.findOne({_id: id, user: user._id})
        if (!favorite) {
            res.status(404)
            throw new Error(`cannot find any favorites product with id: ${id}`)
        }
        res.status(200).json({payload: favorite})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeFavorite = asyncHandler(async(req, res)=>{
    try {
        try {
            const user = await Users.findOne({username: req.user.username})
            const product = await Product.findOne({product_name: req.body.product})
            req.body.user = user._id
            req.body.product = product
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any products with name: ${req.body.product}`)
        }
        const favorite = await Favorites.create(req.body)
        res.status(200).json({payload: favorite})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteFavoriteById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const user = await Users.findOne({username: req.user.username})
        const favorite = await Favorites.findOneAndDelete({_id: id, user: user._id})
        if(!favorite){
            res.status(404)
            throw new Error(`cannot find any favorite items with id: ${id}`)
        }
        res.status(200).json({message: 'item deleted'})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {getAllFavorites, getFavoriteById, storeFavorite, deleteFavoriteById}