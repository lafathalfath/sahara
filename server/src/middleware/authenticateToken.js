const jwt = require('jsonwebtoken')

const authenticateToken=(req, res, next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendStatus(401)
    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

const generateAccessToken = (user)=>{
    const expireDelay = 60*60*1
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

const loginHandler = (req, res)=>{
    // const 
}

module.exports = {authenticateToken, generateAccessToken, tokenHandler} 