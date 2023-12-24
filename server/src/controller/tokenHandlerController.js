// const asyncHandler = require('express-async-handler')

const jwt = require("jsonwebtoken")
const { generateAccessToken } = require("../middleware/authenticateToken")

const tokenHandler = (req, res)=>{
    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401)
    if(refreshToken.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN, (err, user)=>{
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({name: user.name})
        res.json({accessToken: accessToken})
    })
}

module.exports = {tokenHandler}