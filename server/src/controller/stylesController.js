const asyncHandler = require('express-async-handler')
const Styles = require('../models/Styles')

const getAllStyles = asyncHandler(async(req, res)=>{
    try {
        const styles = await Styles.find({})
        res.status(200).json({payload: styles})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getStylesById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const styles = await Styles.findById(id)
        if (!styles) {
            res.status(404)
            throw new Error(`cannot find any styles with id: ${id}`)
        }
        res.status(200).json({payload: styles})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeStyles = asyncHandler(async(req, res)=>{
    try {
        const styles = await Styles.create(req.body)
        res.status(200).json({payload: styles})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const updateStyles = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const styles = await Styles.findByIdAndUpdate(id, req.body)
        if (!styles) {
            res.status(404)
            throw new Error(`cannot find any styles with id: ${id}`)
        }
        const updatedStyles = await Styles.findById(id)
        res.status(200).json({payload: updatedStyles})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteStyles = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const styles = await Styles.findByIdAndDelete(id)
        if (!styles) {
            res.status(404)
            throw new Error(`cannot find any styles with id: ${id}`)
        }
        res.status(200).json({message: `item deleted ${id}`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = { getAllStyles, getStylesById, storeStyles, updateStyles, deleteStyles }