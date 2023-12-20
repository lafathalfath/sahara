const asyncHandler = require('express-async-handler')
const Product = require('../models/Product')
const Category = require('../models/Category')
const Styles = require('../models/Styles')

const getAllProducts = asyncHandler(async(req, res)=>{
    try {
        const product = await Product.find({})
        res.status(200).json({payload: product})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getProductById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        if (!product) {
            res.status(404)
            throw new Error(`cannot find any product with id: ${id}`)
        }
        res.status(200).json({payload: product})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeProduct = asyncHandler(async(req, res)=>{
    try {
        try {
            const category = await Category.findOne({category_name: req.body.category})
            req.body.category = category.id
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any category with name: ${req.body.category}`)
        }
        try {
            var style = []
            for(let i=0; i<req.body.style.length; i++){
                const s = await Styles.find({design_style: req.body.style[i]})
                if (!s) {
                    res.status(404)
                    throw new Error(`cannot find any styles with name: ${req.body.style}`)
                }
                style.push(s[0].id)
            }
            console.log(style)
            req.body.style = style
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any styles with name: ${req.body.style}`)
        }
        const product = await Product.create(req.body)
        res.status(200).json({payload: product})
        // res.status(200).json({payload: req.body.style})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const updateProduct = asyncHandler(async(req, res)=>{
    try {
        try {
            const category = await Category.findOne({category_name: req.body.category})
            req.body.category = category.id
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any category with name: ${req.body.category}`)
        }
        try {
            var style = []
            for(let i=0; i<req.body.style.length; i++){
                const s = await Styles.find({design_style: req.body.style[i]})
                if (!s) {
                    res.status(404)
                    throw new Error(`cannot find any styles with name: ${req.body.style}`)
                }
                style.push(s[0].id)
            }
            console.log(style)
            req.body.style = style
        } catch (error) {
            res.status(404)
            throw new Error(`cannot find any styles with name: ${req.body.style}`)
        }
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            res.status(404)
            throw new Error(`cannot find any product with id: ${id}`)
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({payload: updatedProduct})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteProductById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            res.status(404)
            throw new Error(`cannot find any product with id: ${id}`)
        }
        res.status(200).json({message: `item deleted ${id}`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {getAllProducts, getProductById, storeProduct, updateProduct, deleteProductById}