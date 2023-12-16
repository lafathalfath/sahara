const jwt = require('jsonwebtoken')

// const authenticateToken = (req, res, next)=>{
//     const token = req.header('Authorization')
//     if (!token) {
//         return res.status(401).json({message: 'Access restricted. token is missing'})
//     }
//     const clearToken = token.replace('Bearer ', '')
//     jwt.verify(clearToken, process.env.SECRET_ACCESS_TOKEN, (err, user)=>{
//         if(err){
//             console.error(err)
//             return res.status(403).json({message: 'Invalid token'})
//         }
//         req.user = user
//         next()
//     })
// }

// const authenticateToken=(req, res, next)=>{
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if(token==null) return res.sendStatus(401)
    
//     jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, user)=>{

//     })
// }

module.exports = authenticateToken