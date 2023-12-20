const asyncHandler = require('express-async-handler')
const Favorites = require('../models/Favorites')
const Users = require('../models/Users')
const Product = require('../models/Product')

const getAllFavorites = asyncHandler(async(req, res)=>{
    try {
        const favovrite = await Favorites.find({})
        res.status(200).json({payload: favovrite})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getFavoriteById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const favorite = await Favorites.findById(id)
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
            const user = await Users.findOne({username: req.body.user})
            req.body.user = user.id
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any users with username: ${req.body.user}`)
        }
        try {
            const product = await Product.findOne({product_name: req.body.product})
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
const updateFavorite = asyncHandler(async(req, res)=>{
    try {
        try {
            const user = await Users.findOne({username: req.body.user})
            req.body.user = user.id
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any users with username: ${req.body.user}`)
        }
        try {
            const product = await Product.findOne({product_name: req.body.product})
            req.body.product = product
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any products with name: ${req.body.product}`)
        }
        const {id} = req.params
        const favorite = await Favorites.findByIdAndUpdate(id, req.body)
        if (!favorite) {
            res.status(404)
            throw new Error(`cannot find any favorite items with id: ${id}`)
        }
        const updatedFavorite = await Favorites.findById(id)
        res.status(200).json({payload: updatedFavorite, message: 'item updated'})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteFavoriteById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const favorite = await Favorites.findByIdAndDelete(id)
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

module.exports = {getAllFavorites, getFavoriteById, storeFavorite, updateFavorite, deleteFavoriteById}