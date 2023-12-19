const express = require('express')
const { getAllUsers, getUserById, storeUser, updateUser, deleteUserById } = require('../controller/usersControllers')
const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', storeUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUserById)

module.exports = router