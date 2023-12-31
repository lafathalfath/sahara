const asyncHandler = require("express-async-handler");
const Ratings = require("../models/Ratings");
const Product = require("../models/Product");
const Users = require("../models/Users");


const getAllRatings = asyncHandler(async(req, res)=>{
    try {
        const rating = await Ratings.find({})
        res.status(200).json({payload: rating})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getRatingById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const rating = await Ratings.findById(id)
        if (!rating) {
            res.status(404)
            throw new Error(`cannot find any ratings with id: ${id}`)
        }
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeRating = asyncHandler(async(req, res)=>{
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
            req.body.product = product.id
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any products with name: ${req.body.product}`)
        }
        const rating = await Ratings.create(req.body)
        res.status(200).json({payload: rating})
    } catch (error) {
        // console.log(error.code)
        if (error.code === 11000 && error.keyPattern && error.keyPattern.product === 1) {
            res.status(400)
            throw new Error(`item already exist`)
        }
        res.status(500)
        throw new Error(error.message)
    }
})
const updateRating = asyncHandler(async(req, res)=>{
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
            req.body.product = product.id
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any products with name: ${req.body.product}`)
        }
        const {id} = req.params
        const rating = await Ratings.findByIdAndUpdate(id, req.body)
        if(!rating){
            res.status(404)
            throw new Error(`cannot find any ratings with id: ${id}`)
        }
        const updatedRating = await Ratings.findById(id)
        res.status(200).json({payload: updatedRating, message: `item updated ${id}`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteRatingById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const rating = await Ratings.findByIdAndDelete(id)
        if (!rating) {
            res.status(404)
            throw new Error(`cannot find any ratings with id: ${id}`)
        }
        res.status(200).json({message: `item deleted id: ${id}`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {getAllRatings, getRatingById, storeRating, updateRating, deleteRatingById}