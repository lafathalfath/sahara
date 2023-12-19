const Nation = require('../models/Nation')
const asyncHandler = require('express-async-handler')

const getAllNation = asyncHandler(async(req, res)=>{
    try {
        const nation = await Nation.find({})
        res.status(200).json({payload: nation})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getNationById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const nation = await Nation.findById(id)
        if(!nation){
            res.status(404)
            throw new Error(`cannot find any nation with id: ${id}`)
        }
        res.status(200).json({payload: nation})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeNation = asyncHandler(async(req, res)=>{
    try {
        const nation = await Nation.create(req.body)
        res.status(200).json({payload: nation})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const updateNation = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const nation = await Nation.findByIdAndUpdate(id, req.body)
        if (!nation) {
            res.status(404)
            throw new Error(`cannot find any nation with id: ${id}`)
        }
        const updatedNation = await Nation.findById(id)
        res.status(200).json({payload: updatedNation})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const destroyNationById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const nation = await Nation.findByIdAndDelete(id)
        if (!nation) {
            res.status(404)
            throw new Error(`cannot find any nation with id: ${id}`)
        }
        res.status(200).json({payload: nation})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getAllNation,
    getNationById,
    storeNation,
    updateNation,
    destroyNationById
}