const City = require("../models/City");
const Nation = require("../models/Nation");
const Users = require("../models/Users");
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const Favorites = require("../models/Favorites");
const Cart = require("../models/Cart");
const Transaction = require("../models/Transaction");

const getAllUsers = asyncHandler(async(req, res)=>{
    try {
        const users = await Users.findOne({username: req.user.username})
        // let userPayload = users
        // userPayload[0].nation = {}
        res.status(200).json({payload: users})
        console.log(req.user);
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const getUserById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        const user = await Users.findById(id)
        if (!user) {
            res.status(404)
            throw new Error (`cannot find any users with id: ${id}`)
        }
        res.status(200).json({payload: user})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const storeUser = asyncHandler(async(req, res)=>{
    try {
        try {
            const cityId = req.body.city
            const city = await City.findOne({city_name: cityId})
            req.body.city = city.id
        } catch (error) {
            res.status(500)
            throw new Error(error.message)
        }
        await bcrypt.hash(req.body.password, 9).then(pwd=>req.body.password = pwd).catch(err=>console.error(err.message))
        const data = req.body

        // res.status(200).json({payload: data})
        const payload = await Users.create(data)
        res.status(200).json({payload: payload})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const updateUser = asyncHandler(async(req, res)=>{
    try {
        try {
            const city = await City.findOne({city_name: req.body.city})
            req.body.city = city.id
        } catch (error) {
            res.status(500)
            throw new Error(error.message)
        }
        const {id} = req.params
        const user = await Users.findByIdAndUpdate(id, req.body)
        if(!user){
            res.status(404)
            throw new Error (`cannot find any users with id: ${id}`)
        }
        const updatedUser = await Users.findById(id)
        res.status(200).json({payload: updatedUser, message: `item updated id: ${id}`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})
const deleteUserById = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params
        await Favorites.deleteMany({user: id})
        await Cart.deleteMany({user: id})
        await Transaction.deleteMany({user: id})
        const user = await Users.findByIdAndDelete(id)
        if(!user){
            res.status(404)
            throw new Error (`cannot find any users with id: ${id}`)
        }
        res.status(200).json({message: `item deleted ${id}`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getAllUsers,
    getUserById,
    storeUser,
    updateUser,
    deleteUserById
}