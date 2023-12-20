const asyncHandler = require('express-async-handler')
const Transaction = require('../models/Transaction')
const Users = require('../models/Users')
const Product = require('../models/Product')

const getAllTransaction = asyncHandler(async(req, res)=>{
    try {
        const transaction = await Transaction.find({})
        res.status(200).json({payload: transaction})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getTransactionById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const transaction = await Transaction.findById(id)
        if(!transaction){
            res.status(404)
            throw new Error(`cannot find any transaction with id: ${id}`)
        }
        res.status(200).json({payload: transaction})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeTransaction = asyncHandler(async(req, res)=>{
    try {
        try {
            const user = await Users.findOne({username: req.body.user})
            req.body.user = user.id
        } catch (error) {
            res.status(404)
            throw new Error(error.message)
        }
        try {
            const product = await Product.findOne({product_name: req.body.product})
            req.body.product = product.id
        } catch (error) {
            res.status(404)
            throw new Error(error.message)
        }
        const transaction = await Transaction.create(req.body)
        res.status(200).json({payload: transaction})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteTransactionById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const transaction = await Transaction.findByIdAndDelete(id)
        if (!transaction) {
            res.status(404)
            throw new Error(`cannot find any transaction with id: ${id}`)
        }
        res.status(200).json({message: 'item deleted'})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {getAllTransaction, getTransactionById, storeTransaction, deleteTransactionById}