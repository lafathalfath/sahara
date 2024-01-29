const asyncHandler = require('express-async-handler')
const Admin = require('../models/Admin')

const getAllAdmin=asyncHandler(async(req, res)=>{
    try {
        const admin = await Admin.findOne({usename: req.user.username})
        res.status(200).json({message: 'success', payload: admin})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getAdminById=asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const admin = await Admin.findById(id)
        if (!admin) {
            res.status(404)
            throw new Error(`cannot find any users with id: ${id}`)
        }
        res.status(200).json({message: 'success', payload: admin})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeAdmin=asyncHandler(async(req, res)=>{
    try {
        await bcrypt.hash(req.body.password, 9).then(pwd=>req.body.password = pwd).catch(err=>console.error(err.message))
        const data = req.body
        const admin = await Admin.create(data)
        res.status(200).json({message: 'success', payload: admin})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const updateAdmin=asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        if (req.body.password) await bcrypt.hash(req.body.password, 9).then(pwd=>req.body.password = pwd).catch(err=>console.error(err.message))
        const admin = await Admin.findByIdAndUpdate(id, req.body)
        if (!admin) {
            res.status(404)
            throw new Error(`cannot find any users with id: ${id}`)
        }
        const updatedAdmin = await Admin.findById(id)
        res.status(200).json({message: 'success', payload: updatedAdmin})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteAdmin=asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const admin = await Admin.findByIdAndDelete(id)
        if (!admin) {
            res.status(404)
            throw new Error(`cannot find any users with id: ${id}`)
        }
        res.status(200).json({message: 'success', payload: admin})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getAllAdmin, getAdminById, storeAdmin, updateAdmin, deleteAdmin
}