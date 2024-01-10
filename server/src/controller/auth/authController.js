const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const Users = require('../../models/Users')


let refreshTokens = []

const generateAccessToken = (user)=>{
    const expireDelay = 60*60*1
    // const expireDelay = 30
    return jwt.sign(user, process.env.SECRET_ACCESS_TOKEN, {expiresIn: `${expireDelay}s`})
}

const tokenHandler = (req, res)=>{
    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401)
    if(!refreshToken.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN, (err, user)=>{
        if(err) return res.sendStatus(403)
        const accessToken = generateAccessToken({name: user.name})
        res.json({accessToken: accessToken})
    })
}
const loginHandler = asyncHandler(async(req, res)=>{
    const usr = await Users.findOne({username: req.body.username})
    if(!usr) res.json({message: `an account with username: ${req.body.username} not yet registered`}, 404)
    bcrypt.compare(req.body.password, usr.password)
    .then(val=>{
        if (val) {
            const user = {
                username: req.body.username,    
                password: usr.password
            }
            const accessToken = generateAccessToken(user)
            const refreshToken = jwt.sign(user, process.env.SECRET_REFRESH_TOKEN)
            refreshTokens.push(refreshToken)
            res.json({accessToken: accessToken, refreshToken: refreshToken}, 200)
        }
        res.json({message:'password is wrong'}, 403)
    })
    .catch(err=>console.error(err.message))
})

const logoutHandler=()=>{
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
}

module.exports = {generateAccessToken, tokenHandler, loginHandler, logoutHandler} 
