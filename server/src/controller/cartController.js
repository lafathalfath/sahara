const asyncHandler = require('express-async-handler')
const Cart = require('../models/Cart')
const Product = require('../models/Product')
// const { trace } = require('../routes/usersRoute')
const Users = require('../models/Users')

const getAllCart = asyncHandler(async(req, res)=>{
    try {
        const user = await Users.findOne({username: req.user.username})
        // console.log(user)
        const cart = await Cart.find({user: user._id})
        res.status(200).json({payload: cart})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getCartById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const user = await Users.findOne({username: req.user.username})
        const cart = await Cart.findOne({_id: id, user: user._id})
        if (!cart) {
            res.status(404)
            throw new Error(`cannot find any items in cart with id: ${id}`)
        }
        res.status(200).json({payload: cart})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeCart = asyncHandler(async(req, res)=>{
    try {
        try {
            const user = await Users.findOne({username: req.user.username})
            const product = await Product.findOne({product_name: req.body.product})
            req.body.product = product
            req.body.user = user._id
        } catch (error) {
            res.status(404)
            throw new Error(error.message)
        }
        const cart = await Cart.create(req.body)
        res.status(200).json({payload: cart})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteCartById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const user = await Users.findOne({username: req.user.username})
        const cart = await Cart.findOneAndDelete({_id: id, user: user._id})
        if (!cart) {
            res.status(404)
            throw new Error(`cannot find any cart items with id: ${id}`)
        }
        res.status(200).json({message: 'item deleted'})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {getAllCart, getCartById, storeCart, deleteCartById}