const Nation = require('../models/Nation')
const Province = require('../models/Province')
const asyncHandler = require('express-async-handler')

const getAllProvince = asyncHandler(async(req, res)=>{
    try {
        const province = await Province.find({})
        res.status(200).json({payload: province})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getProvinceById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const province = await Province.findById(id)
        if (!province) {
            res.status(404)
            throw new Error(`cannot find any province with id: ${id}`)
        }
        res.status(200).json({payload: province})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeProvince = asyncHandler(async(req, res)=>{
    try {
        try {
            const nation = await Nation.findOne({nation_name: req.body.nation})
            req.body.nation = nation
        } catch (error) {
            res.status(500)
            throw new Error(error.message)
        }
        const province = await Province.create(req.body)
        res.status(200).json({payload: province})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const updateProvince = asyncHandler(async(req, res)=>{
    try {
        try {
            const nation = await Nation.findOne({nation_name: req.body.nation})
            req.body.nation = nation
        } catch (error) {
            res.status(500)
            throw new Error(error.message)
        }
        const {id} = req.params
        const province = await Province.findByIdAndUpdate(id, req.body)
        if (!province) {
            res.status(404)
            throw new Error(`cannot find any province with id: ${id}`)
        }
        const updatedProvince = await Province.findById(id)
        res.status(200).json({payload: updatedProvince, message: `item with id: ${id} updated`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const destroyProvinceById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const province = await Province.findByIdAndDelete(id)
        if (!province) {
            res.status(404)
            throw new Error(`cannot find any province with id: ${id}`)
        }
        res.status(200).json({message: `item deleted ${id}`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getAllProvince,
    getProvinceById,
    storeProvince,
    updateProvince,
    destroyProvinceById
}