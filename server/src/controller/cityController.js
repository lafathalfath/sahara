const asyncHandler = require('express-async-handler')
const City = require('../models/City')
const Province = require('../models/Province')

const getAllCity = asyncHandler(async(req, res)=>{
    try {
        const city = await City.find({})
        res.status(200).json({payload: city})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getCityById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const city = await City.findById(id)
        if (!city) {
            res.status(404)
            throw new Error(`cannot find any city with id: ${id}`)
        }
        res.status(200).json({payload: city})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeCity = asyncHandler(async(req, res)=>{
    try {
        try {
            const province = await Province.findOne({province_name: req.body.province})
            req.body.province = province
        } catch (error) {
            res.status(500)
            throw new Error(error.message)
        }
        const city = await City.create(req.body)
        res.status(200).json({payload: city})
        // res.status(200).json({payload: req.body})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const updateCity = asyncHandler(async(req, res)=>{
    try {
        try {
            const province = await Province.findOne({province_name: req.body.province})
            req.body.province = province
        } catch (error) {
            res.status(500)
            throw new Error(error.message)
        }
        const {id} = req.params
        const city = await City.findByIdAndUpdate(id, req.body)
        if(!city){
            res.status(404)
            throw new Error(`cannot find any city with id: ${id}`)
        }
        const updatedCity = await City.findById(id)
        res.status(200).json({payload: updatedCity, message: `item with id: ${id} updated`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const destroyCityById = asyncHandler(async(req, res)=>{
    const {id} = req.params
    try {
        const city = await City.findByIdAndDelete(id)
        if(!city){
            res.status(404)
            throw new Error(`cannot find any city with id: ${id}`)
        }
        res.status(200).json({message: `item deleted ${id}`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getAllCity,
    getCityById,
    storeCity,
    updateCity,
    destroyCityById
}