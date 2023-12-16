const Nation = require("../models/Nation");
const Users = require("../models/Users");
const asyncHandler = require("express-async-handler");


const getAllUsers = asyncHandler(async(req, res)=>{
    try {
        const users = await Users.find({})
        let userPayload = users
        userPayload[0].nation = {}
        res.status(200).json({payload: userPayload})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const storeUser = asyncHandler(async(req, res)=>{
    try {
        try {
            const nationId = req.body.nation
            const nation = await Nation.findOne({nation_name: nationId})
            req.body.nation = nation.id
        } catch (error) {
            res.status(500)
            throw new Error(error.message)
        }
        const data = req.body

        // res.status(200).json({payload: data})
        const payload = await Users.create(data)
        res.status(200).json({payload: payload})
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

module.exports = {
    getAllUsers,
    storeUser,
}