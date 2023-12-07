const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next)=>{
    const token = req.header('Authorization')
    if (!token) {
        return res.status(401).json({message: 'Access restricted. token is missing'})
    }
    const clearToken = token.replace('Bearer ', '')
    jwt.verify(clearToken, process.env.API_KEY, (err, user)=>{
        if(err){
            console.error(err)
            return res.status(403).json({message: 'Invalid token'})
        }
        req.user = user
        next()
    })
}

module.exports = authenticateToken