const asyncHandler = require("express-async-handler");
const Category = require("../models/Category");


const getAllCategory = asyncHandler(async(req, res)=>{
    try {
        const category = await Category.find({})
        res.status(200).json({payload: category})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getCategoryById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const category = await Category.findById(id)
        if(!category){
            res.status(404)
            throw new Error(`cannot find any categories with id: ${id}`)
        }
        res.status(200).json({payload: category})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeCategory = asyncHandler(async(req, res)=>{
    try {
        const category = await Category.create(req.body)
        res.status(200).json({payload: category})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const updateCategory = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const category = await Category.findByIdAndUpdate(id, req.body)
        if (!category) {
            res.status(404)
            throw new Error(`cannot find any categories with id: ${id}`)
        }
        const updatedCategory = await Category.findById(id)
        res.status(200).json({payload: updatedCategory})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteCategoryById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const category = await Category.findByIdAndDelete(id)
        if (!category) {
            res.status(404)
            throw new Error(`cannot find any categories with id: ${id}`)
        }
        res.status(200).json({message: `item deleted ${id}`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = { getAllCategory, getCategoryById, storeCategory, updateCategory, deleteCategoryById }