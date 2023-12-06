const Nation = require('../models/Nation')

const getAllNation=async(req, res)=>{
    try {
        const nation = await Nation.find({})
        res.status(200).json(nation)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}
const getNationById=async(req, res)=>{
    try {
        const {id} = req.params
        const nation = await Nation.findById(id)
        res.status(200).json(nation)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const storeNation=async(req, res)=>{
    try {
        const nation = await Nation.create(req.body)
        res.status(200).json(nation)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}
const updateNation=async(req, res)=>{
    try {
        const {id} = req.params
        const nation = await Nation.findByIdAndUpdate(id, req.body)
        if (!nation) {
            return res.status(404).json({message: `cannot find any nation with id: ${id}`})
        }
        const updatedNation = await Nation.findById(id)
        res.status(200).json(updatedNation)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const destroyNationById=async(req, res)=>{
    try {
        const {id} = req.params
        const nation = await Nation.findByIdAndDelete(id)
        if (!nation) {
            return res.status(404).json({message: `cannot find any nation with id: ${id}`})
        }
        res.status(200).json(nation)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllNation,
    getNationById,
    storeNation,
    updateNation,
    destroyNationById
}